import React, { useState } from "react";
import { ArticleCard } from "../component/ArticleCard";
import { ReadArticles } from "../component/ReadArticles";
import { Articles } from "./Articles";
import { Sections } from "./Sections";
import "../../styles/home.scss";
import { DarkModeButton } from "../component/DarkModeButton";

export const Home = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	let dark = "";

	if (darkTheme) {
		dark = "bg-dark";
	}

	return (
		<div className={`container-fluid mt-5 ` + dark}>
			<button
				type="button"
				className="btn btn-dark"
				onClick={() => {
					setDarkTheme(!dark);
				}}>
				Switch to Dark Theme
			</button>
			{/* <Articles theme={darkTheme ? darkThemeArticles : defaultThemeArticles} /> */}
			<Sections theme={darkTheme ? darkThemeArticles : defaultThemeArticles} />
		</div>
	);
};

const darkThemeArticles = {
	color: "black"
};

const defaultThemeArticles = {
	color: "light"
};
