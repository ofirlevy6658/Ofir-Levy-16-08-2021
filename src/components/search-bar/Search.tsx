import React, { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTerm } from "../../feature/search-term/search-term-slice";
import "./search.scss";

export const Search = () => {
	const dispatch = useAppDispatch();
	const term = useAppSelector((state) => state.search.term);
	const [query, setQuery] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (query) {
				dispatch(setTerm(query));
			}
		}, 1500);

		return () => {
			clearTimeout(timeout);
		};
	}, [query, dispatch]);

	return (
		<div className="search-container">
			<Input
				className="search-input"
				size="huge"
				icon="search"
				placeholder={term}
				value={query}
				onChange={(e) => {
					let value = e.target.value;
					value = value.replace(/[^A-Za-z\s]/gi, "");
					setQuery(value);
				}}
			/>
		</div>
	);
};
