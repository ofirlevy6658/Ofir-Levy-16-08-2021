/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";

import { useAppSelector } from "../../app/hooks";
import {
	useFetchCityKeyQuery,
	useFetchCurrentWeatherQuery,
	useFetch5dayQuery,
} from "../../feature/accuWeather/accuWeather-api-slice";

import "./city-card.scss";

export const CityCard = () => {
	const [fav, setFav] = useState("");
	// const term = useAppSelector((state) => state.search.term);
	// const { data: city, isSuccess } = useFetchCityKeyQuery(term);
	// const { data: currentWeather } = useFetchCurrentWeatherQuery(
	// 	city ? city[0]?.Key : "215854",
	// 	{
	// 		skip: !isSuccess,
	// 	}
	// );
	// console.log(currentWeather);
	return (
		<div className="card-container">
			<span>Tel Aviv 31c</span>
			<Icon
				name="heart"
				size="big"
				className={`favorite-icon ${fav}`}
				onClick={() => (fav === "" ? setFav("red") : setFav(""))}
			></Icon>
		</div>
	);
};
