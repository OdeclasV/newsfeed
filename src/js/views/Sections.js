import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ArticleCard } from "../component/ArticleCard";

export const Sections = props => {
	const { store, actions } = useContext(Context);
	const [subsection, setSubsection] = useState("all");

	const articles = store.articleList;

	return (
		<>
			<div className="row">
				<ul className="subsections" style={{ display: "inline-flex", listStyle: "none" }}>
					{store.sections.map((section, index) => {
						return (
							<li
								className="subsection-item p-1 m-3"
								style={props.theme.color == "black" ? { color: "white" } : { color: "black" }}
								key={index}
								onClick={() => {
									setSubsection(section);
								}}>
								{section}
							</li>
						);
					})}
				</ul>
			</div>

			<div className="articles d-flex flex-wrap">
				{articles
					.filter(article => (subsection == "all" ? true : subsection == article.subsection))
					.map((article, index) => {
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

Sections.propTypes = {
	history: PropTypes.object,
	section: PropTypes.string,
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
