import React, { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTerm } from "../../feature/search-term/search-term-slice";
import "./search.scss";

const API_KEY = "TdqIohPJNDwuMXd3AuZuZ0JsckDVQ0rL";

export const Search = () => {
	const dispatch = useAppDispatch();
	const term = useAppSelector((state) => state.search.term);
	const [query, setQuery] = useState("");
	const [autoCompleteData, setAutoComplete] = useState([""]);
	// const { data } = useFetchCityKeyQuery(term);

	useEffect(() => {
		const fetchAutoComp = async () => {
			const { data } = await axios.get(
				`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
			);
			setAutoComplete(data.map((el: any) => el.LocalizedName));
		};

		const timeout = setTimeout(() => {
			if (query) {
				console.log("in");
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
