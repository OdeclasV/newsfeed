import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ArticleCard } from "./ArticleCard";

export const Sections = props => {
	const { store, actions } = useContext(Context);
	const [articles, setArticles] = useState();

	//const articles = store.articleList;

	//console.log(articles);

	// const showArticles = section => {
	// 	articles.map(article => {
	// 		if (article.subsection === section) {
	// 			console.log(article);
	// 		}
	// 	});
	// };

	return (
		<div className="row">
			<ul className="subsections" style={{ display: "inline-flex", listStyle: "none" }}>
				{store.sections.sort().map((section, index) => {
					return (
						<li
							className="subsection-item p-1 m-3"
							key={index}
							style={props.theme}
							onClick={() => showArticles(section)}>
							{section}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

Sections.propTypes = {
	history: PropTypes.object,
	section: PropTypes.string,
	theme: PropTypes.object
};
