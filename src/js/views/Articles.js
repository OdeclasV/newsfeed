import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { ArticleCard } from "../component/ArticleCard";
import { Sections } from "./Sections";

export const Articles = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Sections theme={props.theme.color === "black" ? { color: "white" } : { color: "black" }} />
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
		</>
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
