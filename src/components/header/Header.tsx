import React, { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import "./header.scss";
// tsr

export const Header = () => {
	const [activeItem, setActiveItem] = useState("");
	let history = useHistory();

	return (
		<div>
			<Menu compact icon="labeled">
				<h1>Weather app</h1>
				<Menu.Item
					name="home"
					active={activeItem === "home"}
					onClick={() => {
						setActiveItem("home");
						history.push("/");
					}}
				>
					<Icon name="home" />
					Home
				</Menu.Item>
				<Menu.Item
					name="favorite"
					active={activeItem === "favorite"}
					onClick={() => {
						setActiveItem("favorite");
						history.push("/favorite");
					}}
				>
					<Icon name="favorite" />
					Favorite
				</Menu.Item>
			</Menu>
		</div>
	);
};
