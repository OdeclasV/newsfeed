const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			articleList: [],
			readArticles: [],
			sections: []
		},
		actions: {
			getArticles: () => {
				// get articles from NYT
				fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=INTqA41gX6N3Pi01pKA5hqCUiQe7tJxK")
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						// set articleList to all articles from APi
						setStore({ articleList: data.results });
						console.log("fetched articles from NYT", data.results);
						return data.results;
					})
					.then(results => {
						let subsections = results.map((result, index) => {
							// some subsections are empty coming from the API
							if (result.subsection === "") {
								result.subsection = "other";
							}
							return result.subsection;
						});
						let uniqueSubsections = subsections.reduce((previousValue, currentValue) => {
							if (previousValue.indexOf(currentValue) === -1) {
								previousValue.push(currentValue);
							}
							// sort values before adding them to sections
							return previousValue.sort();
						}, []);
						// set sections to filtered values
						// hardcoding 'all' to make sure that's always first in the list
						setStore({ sections: ["all", ...uniqueSubsections] });
					});
			},

			addReadArticle: nameOfArticle => {
				let { readArticles } = getStore();
				readArticles.includes(nameOfArticle) ? readArticles : readArticles.push(nameOfArticle);
				setStore({ readArticles: readArticles });
			},

			deleteArticle: articleToDelete => {
				let newArticles = getStore().articleList.filter(article => {
					return article !== articleToDelete;
				});

				setStore({ articleList: newArticles });
			}
		}
	};
};

export default getState;
