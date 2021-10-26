import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ArticleSections = props => {
	const { store, actions } = useContext(Context);

	console.log(props);

	return <h2>Heres the {props.match} section</h2>;
};

ArticleSections.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
	section: PropTypes.string
};
