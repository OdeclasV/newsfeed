import React from "react";

export const DarkModeButton = () => {
	return (
		<button
			type="button"
			className="btn btn-dark"
			onClick={() => {
				console.log("clicked!");
			}}>
			Dark
		</button>
	);
};
