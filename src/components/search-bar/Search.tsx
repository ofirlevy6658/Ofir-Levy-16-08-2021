import React from "react";
import { Input } from "semantic-ui-react";
import "./search.scss";
interface Props {}

export const Search = (props: Props) => {
	return (
		<div className="search-container">
			<Input
				className="search-input"
				size="huge"
				icon="search"
				placeholder="Search..."
			/>
		</div>
	);
};
