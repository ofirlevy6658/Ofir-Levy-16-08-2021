import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FavoriteCard } from "../../components/favorite-card/FavoriteCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTerm } from "../../feature/search-term/search-term-slice";

import "./favorite.scss";

interface city {
	Key: string;
	LocalizedName: string;
}
export const Favorite = () => {
	const [cities] = useState(JSON.parse(localStorage.getItem("cities")!));
	const dispatch = useAppDispatch();
	const darkMode = useAppSelector((state) => state.darkMode.mode);
	let history = useHistory();
	const clickHandle = (cityName: string) => {
		dispatch(setTerm(cityName));
		history.push("/");
	};
	if (cities) {
		return (
			<div className={`container-fav ${darkMode ? "dark-mode" : ""}`}>
				{cities.map((el: city) => {
					return (
						<div key={el.Key}>
							<FavoriteCard
								name={el.LocalizedName}
								keyCity={el.Key}
								click={clickHandle}
							/>
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
