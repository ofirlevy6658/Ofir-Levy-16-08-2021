import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Favorite } from "./pages/favorite/Favorite";
import { Header } from "./components/header/Header";
import { useAppSelector } from "./app/hooks";

import "./index.css";

function App() {
	const darkMode = useAppSelector((state) => state.darkMode.mode);

	return (
		<div className={`${darkMode ? "global-container" : ""}`}>
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
