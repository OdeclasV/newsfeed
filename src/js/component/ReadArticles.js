import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ReadArticles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>Read articles section</h1>
			<ul>
				{store.readArticles.map((readArticle, index) => {
					return <li key={index}>{readArticle}</li>;
				})}
			</ul>
		</div>
	);
};
