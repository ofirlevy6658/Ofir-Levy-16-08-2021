import React from "react";

import { Search } from "../../components/search-bar/Search";
import { CityCard } from "../../components/city-card/CityCard";

export const Home = () => {
	return (
		<>
			<Search />
			<CityCard />
		</>
	);
};
