import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Favorite } from "./pages/favorite/Favorite";
import { Header } from "./components/header/Header";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { setTerm } from "./feature/search-term/search-term-slice";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

const API_KEY = "jZaHm4J2LZfcvQUPGcjWMVrtYaF8cV21";

function App() {
	const darkMode = useAppSelector((state) => state.darkMode.mode);
	const dispatch = useAppDispatch();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async function (position) {
			const { data } = await axios(
				`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
			);
			dispatch(setTerm(data.LocalizedName));
		});
	}, [dispatch]);

	return (
		<div className={`${darkMode ? "darkMode-global-container" : ""}`}>
			<Router>
				<Header />
				<Switch>
					<Route path="/favorite">
						<Favorite />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
