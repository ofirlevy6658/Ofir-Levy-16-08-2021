/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import "./city-card.scss";
import { useAppSelector } from "../../app/hooks";
import {
	useFetchCityKeyQuery,
	useFetchCurrentWeatherQuery,
	useFetch5dayQuery,
} from "../../feature/accuWeather/accuWeather-api-slice";

export const CityCard = () => {
	const term = useAppSelector((state) => state.search.term);
	const { data } = useFetchCityKeyQuery(term);
	console.log(data);
	const currentWeather = useFetchCurrentWeatherQuery("215854");
	console.log(currentWeather);
	return (
		<div className="card-container">
			<h1>lol</h1>
		</div>
	);
};
