import React, { useEffect, useState } from "react";
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
	const darkMode = useAppSelector((state) => state.darkMode.mode);
	const tempUnit = useAppSelector((state) => state.tempUnit.mode);
	const {
		data: city,
		isSuccess,
		isLoading: cityIsLoading,
	} = useFetchCityKeyQuery(term);
	const { data: currentWeather, isLoading: currentWeatherIsLoading } =
		useFetchCurrentWeatherQuery(city ? city[0]?.Key : "215854", {
			skip: !isSuccess,
		});
	const { data: Weather5Day, isLoading: weekWeatherLoading } =
		useFetch5dayQuery(city ? city[0]?.Key : "215854", {
			skip: !isSuccess,
		});

	useEffect(() => {
		const cities = JSON.parse(localStorage.getItem("cities")!);
		if (city && cities && !cityIsLoading) {
			const findCity = cities.find(
				(el: { LocalizedName: string }) =>
					el.LocalizedName === city[0]?.LocalizedName
			);
			findCity ? setFav("red") : setFav("");
		}
	}, [fav, city, cityIsLoading]);

	const convertToCel = (far: number) => Math.round((5 / 9) * (far - 32));
	const renderWeekWeather = Weather5Day?.DailyForecasts.map(
		(el: any, index: number) => {
			const d = new Date(el.Date);
			const dayName = days[d.getDay()];
			return (
				<div key={index} className="card">
					<h3>{dayName}</h3>
					{tempUnit ? (
						<p>{el.Temperature.Maximum.Value} ℉</p>
					) : (
						<p>{convertToCel(el.Temperature.Maximum.Value)} ℃</p>
					)}
				</div>
			);
		}
	);

	const favoriteHandle = () => {
		const cities = JSON.parse(localStorage.getItem("cities")!);
		const cityIndex = cities?.findIndex(
			(el: any) => el?.LocalizedName === city[0].LocalizedName
		);
		if (cityIndex === undefined) {
			localStorage.setItem("cities", JSON.stringify([city[0]]));
			return;
		}
		if (cityIndex === -1) cities.push(city[0]);
		else cities.splice(cityIndex, 1);
		localStorage.setItem("cities", JSON.stringify(cities));
		const findCity = cities.find(
			(el: { LocalizedName: string }) =>
				el.LocalizedName === city[0].LocalizedName
		);
		findCity ? setFav("red") : setFav("");
	};

	if (cityIsLoading || currentWeatherIsLoading || weekWeatherLoading)
		return (
			<div className="card-container">
				<div className="center"></div>
			</div>
		);
	if (city?.length > 0 && currentWeather && Weather5Day)
		return (
			<div className={`card-container ${darkMode ? "dark-mode" : ""}`}>
				<Icon
					name="heart"
					size="big"
					className={`favorite-icon ${fav}`}
					onClick={favoriteHandle}
				></Icon>
				<div className="center">
					<p>{city[0]?.LocalizedName}</p>
					<p>
						{!tempUnit
							? currentWeather[0]?.Temperature.Metric.Value + " ℃ "
							: currentWeather[0]?.Temperature.Imperial.Value + " ℉ "}
						&nbsp;&nbsp;&nbsp;
						{currentWeather[0]?.WeatherText}
					</p>
					<div className="cards">{renderWeekWeather}</div>
				</div>
			</div>
		);
	else
		return (
			<div className="card-container">
				<div className="center">
					<h1>city was not found</h1>
				</div>
			</div>
		);
};
