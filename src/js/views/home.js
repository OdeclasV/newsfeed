import React from "react";
import { ArticleCard } from "../component/ArticleCard";
import { ReadArticles } from "../component/ReadArticles";
import { Articles } from "./Articles";
import { Sections } from "../component/Sections";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container-fluid mt-5">
		<Sections />
		<Articles />
	</div>
);
