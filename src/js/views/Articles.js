import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { ArticleCard } from "../component/ArticleCard";

export const Articles = props => {
	const { store, actions } = useContext(Context);

	console.log(props);

	return (
		<div className="articles d-flex flex-wrap">
			{store.articleList.map((article, index) => {
				return (
					<ArticleCard
						key={index}
						article={article}
						style={props.theme.color === "black" ? darkThemeStyle : defaultTheme}
					/>
				);
			})}
		</div>
	);
};

Articles.propTypes = {
	theme: PropTypes.object
};

const darkThemeStyle = {
	color: "white",
	background: "black"
};

const defaultTheme = {
	color: "black",
	background: "white"
};
