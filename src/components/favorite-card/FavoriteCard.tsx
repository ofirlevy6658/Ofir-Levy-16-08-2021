import React from "react";
import { useFetchCurrentWeatherQuery } from "../../feature/accuWeather/accuWeather-api-slice";
import "./favorite-card.scss";
interface Props {
	name: string;
	keyCity: string;
	click: (cityName: string) => void;
}

export const FavoriteCard = ({ name, keyCity, click }: Props) => {
	const { data: currentWeather, isLoading: currentWeatherIsLoading } =
		useFetchCurrentWeatherQuery(keyCity);

	if (currentWeather)
		return (
			<div className="card fav-card" onClick={() => click(name)}>
				<p>{name}</p>
				<p>{currentWeather[0]?.Temperature.Metric.Value + " ℃"}</p>
			</div>
		);
	else
		return (
			<div className="card fav-card">
				<p>{name}</p>
			</div>
		);
};
