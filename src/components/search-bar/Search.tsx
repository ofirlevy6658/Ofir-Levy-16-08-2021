import React, { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTerm } from "../../feature/search-term/search-term-slice";
import "./search.scss";

export const Search = () => {
	const dispatch = useAppDispatch();
	const term = useAppSelector((state) => state.search.term);
	const [query, setQuery] = useState("");
	const [autoCompleteData, setAutoComplete] = useState([""]);

	useEffect(() => {
		const fetchAutoComp = async () => {
			const { data } = await axios.get(
				`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${query}`
			);
			setAutoComplete(data.map((el: any) => el.LocalizedName));
		};

		const timeout = setTimeout(() => {
			if (query) {
				fetchAutoComp();
			}
		}, 700);

		return () => {
			clearTimeout(timeout);
		};
	}, [query]);

	const autoComplete = autoCompleteData?.map((el: any, i) => {
		return <option key={i} value={el} />;
	});

	return (
		<div className="search-container">
			<Input
				list="city"
				className="search-input"
				size="huge"
				icon="search"
				placeholder={term}
				value={query}
				onChange={(e) => {
					let value = e.target.value;
					value = value.replace(/[^A-Za-z\s]/gi, "");
					if (autoCompleteData.includes(value)) {
						dispatch(setTerm(value));
						setQuery("");
						return;
					}
					setQuery(value);
				}}
			/>
			<datalist id="city">{autoComplete}</datalist>
		</div>
	);
};
