import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Favorite } from "./pages/favorite/Favorite";
import { Header } from "./components/search-bar/header/Header";

import "./index.css";

// API KEY 5QeQ8tV4KVVB6zA3a82qAtkZmwRTWvrg
function App() {
	return (
		<>
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
		</>
	);
}

export default App;
