import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header } from "./components/search-bar/header/Header";
import { Search } from "./components/search-bar/Search";

import "./index.css";

// API KEY 5QeQ8tV4KVVB6zA3a82qAtkZmwRTWvrg
function App() {
	return (
		<>
			<Header></Header>
			<Search></Search>
		</>
	);
}

export default App;
