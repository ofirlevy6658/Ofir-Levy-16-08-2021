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
			<Menu compact icon="labeled" size="tiny" fluid={true}>
				<Menu.Item>
					<Icon name="cloud" color="blue" />
					Weather app
				</Menu.Item>
				<Menu.Item
					position="right"
					name="home"
					active={activeItem === "home"}
					onClick={() => {
						setActiveItem("home");
						history.push("/");
					}}
				>
					<Icon name="home" color="grey" />
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
					<Icon name="favorite" color="yellow" />
					Favorite
				</Menu.Item>
			</Menu>
		</div>
	);
};
