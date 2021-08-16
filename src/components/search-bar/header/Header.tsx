import React, { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./header.scss";
// tsr
interface Props {}
export const Header = (props: Props) => {
	const [activeItem, setActiveItem] = useState("");
	// handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	return (
		<div>
			<Menu compact icon="labeled">
				<h1>Weather app</h1>
				<Menu.Item
					name="home"
					active={activeItem === "home"}
					onClick={() => setActiveItem("home")}
				>
					<Icon name="home" />
					Home
				</Menu.Item>
				<Menu.Item
					name="favorite"
					active={activeItem === "favorite"}
					onClick={() => setActiveItem("favorite")}
				>
					<Icon name="favorite" />
					Favorite
				</Menu.Item>
			</Menu>
		</div>
	);
};
