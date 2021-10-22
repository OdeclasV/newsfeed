import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Sections = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<ul className="subsections" style={{ display: "inline-flex", listStyle: "none" }}>
				{store.sections.sort().map((section, index) => {
					return (
						<li className="subsection-item p-1 m-3" key={index}>
							{section}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
