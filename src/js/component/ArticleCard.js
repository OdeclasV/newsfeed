import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ArticleCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="articles d-flex flex-wrap">
				{store.articleList.map((article, index) => {
					return (
						<div className="card article-card col-md-4" key={index}>
							<img className="card-img-top" src={article.multimedia[0].url} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">{article.title}</h5>
								<p className="card-text">{article.abstract}</p>
								<a href={article.short_url} className="btn btn-primary m-1" target="blank">
									Go to article
								</a>
								<button
									className="btn btn-primary m-1"
									onClick={() => {
										actions.deleteArticle(article);
									}}>
									I read this article
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
