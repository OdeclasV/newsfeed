import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { ArticleCard } from "../component/ArticleCard";

export const Articles = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="articles d-flex flex-wrap">
			{store.articleList.map((article, index) => {
				return <ArticleCard key={index} article={article} />;
			})}
		</div>
	);
};
