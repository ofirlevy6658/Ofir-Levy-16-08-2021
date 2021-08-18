import React, { useState } from "react";
import { FavoriteCard } from "../../components/favorite-card/FavoriteCard";
import { useFetchCurrentWeatherQuery } from "../../feature/accuWeather/accuWeather-api-slice";

import "./favorite.scss";

interface city {
	Key: string;
	LocalizedName: string;
}
export const Favorite = () => {
	const [cities] = useState(JSON.parse(localStorage.getItem("cities")!));
	console.log(cities);
	if (cities) {
		return (
			<div className="container-fav">
				{cities.map((el: city) => {
					return (
						<div key={el.Key}>
							<FavoriteCard name={el.LocalizedName} keyCity={el.Key} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className="container-fav">
				<h3>No Favorites</h3>
			</div>
		);
	}
};
