import React from "react";
import { useFetchCurrentWeatherQuery } from "../../feature/accuWeather/accuWeather-api-slice";
import { useAppSelector } from "../../app/hooks";
import { Loader } from "semantic-ui-react";
import "./favorite-card.scss";
interface Props {
	name: string;
	keyCity: string;
	click: (cityName: string) => void;
}

export const FavoriteCard = ({ name, keyCity, click }: Props) => {
	const tempUnit = useAppSelector((state) => state.tempUnit.mode);

	const { data: currentWeather, isLoading: currentWeatherIsLoading } =
		useFetchCurrentWeatherQuery(keyCity);

	if (currentWeatherIsLoading)
		return (
			<div className="fav-card">
				<Loader active inline />
			</div>
		);
	else if (currentWeather)
		return (
			<div className="fav-card" onClick={() => click(name)}>
				<p>{name}</p>
				<p>
					{tempUnit
						? currentWeather[0]?.Temperature.Imperial.Value + " ℉"
						: currentWeather[0]?.Temperature.Metric.Value + " ℃"}
				</p>
			</div>
		);
	else
		return (
			<div className="fav-card">
				<p>{name}</p>
			</div>
		);
};
