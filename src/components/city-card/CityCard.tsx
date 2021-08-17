/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

import { useAppSelector } from "../../app/hooks";
import {
	useFetchCityKeyQuery,
	useFetchCurrentWeatherQuery,
	useFetch5dayQuery,
} from "../../feature/accuWeather/accuWeather-api-slice";

import "./city-card.scss";

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const CityCard = () => {
	const [fav, setFav] = useState("");
	const term = useAppSelector((state) => state.search.term);
	const { data: city, isSuccess } = useFetchCityKeyQuery(term);
	const { data: currentWeather } = useFetchCurrentWeatherQuery(
		city ? city[0]?.Key : "215854",
		{
			skip: !isSuccess,
		}
	);
	const { data: Weather5Day, isLoading: weekWeatherLoading } =
		useFetch5dayQuery(city ? city[0]?.Key : "215854", {
			skip: !isSuccess,
		});
	console.log(Weather5Day);
	console.log(currentWeather);
	const convertToCel = (far: number) => Math.round((5 / 9) * (far - 32));

	const renderWeekWeather = Weather5Day?.DailyForecasts.map(
		(el: any, index: number) => {
			const d = new Date(el.Date);
			const dayName = days[d.getDay()];
			return (
				<div key={index} className="card">
					<h3>{dayName}</h3>
					<p>{convertToCel(el.Temperature.Maximum.Value)}</p>
				</div>
			);
		}
	);

	return (
		<div className="card-container">
			<Icon
				name="heart"
				size="big"
				className={`favorite-icon ${fav}`}
				onClick={() => (fav === "" ? setFav("red") : setFav(""))}
			></Icon>
			<div className="center">
				<p>Tel Aviv 31&#8451;</p>
				<h4>Partly sunny</h4>
				<div className="cards">{renderWeekWeather}</div>
			</div>
		</div>
	);
};
