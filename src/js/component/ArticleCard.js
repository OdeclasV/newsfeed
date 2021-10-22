import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ArticleCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="card article-card col-md-3 m-2">
				<img className="card-img-top" src={props.article.multimedia[0].url} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.article.title}</h5>
					<p className="card-text">{props.article.abstract}</p>
					<a href={props.article.short_url} className="btn btn-primary m-1" target="blank">
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
				<div className="card-footer text-muted">Section: {props.article.subsection}</div>
			</div>
		</>
	);
};

ArticleCard.protoTypes = {
	article: PropTypes.object
};
