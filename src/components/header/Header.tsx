import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMode } from "../../feature/dark-mode/dark-mode-slice";
import { setUnit } from "../../feature/temperature/temperature-slice";
import { Icon, Menu } from "semantic-ui-react";
import { Radio } from "semantic-ui-react";
import "./header.scss";

export const Header = () => {
	const [activeItem, setActiveItem] = useState("");
	const [toggleDarkMode, setToggleDarkMode] = useState(false);
	const [toggleTemp, setToggleTemp] = useState(false);
	const dispatch = useAppDispatch();
	const mode = useAppSelector((state) => state.darkMode.mode);
	let history = useHistory();

	return (
		<div>
			<Menu compact icon="labeled" size="tiny" fluid={true} inverted={mode}>
				<Menu.Item>
					<Icon name="cloud" color="blue" />
					<br />
					Weather app
				</Menu.Item>
				<Menu.Item>
					{!toggleDarkMode ? (
						<Icon name="sun" color="yellow" />
					) : (
						<Icon name="moon" color="violet" />
					)}
					{!toggleDarkMode ? "Light" : "Dark"}
					<Radio
						toggle
						onClick={() => {
							dispatch(setMode(!toggleDarkMode));
							setToggleDarkMode(!toggleDarkMode);
						}}
					/>
				</Menu.Item>
				<Menu.Item>
					<Icon name="thermometer three quarters" color="red" />
					{toggleTemp ? "℉" : "℃"}
					<Radio
						toggle
						onClick={() => {
							dispatch(setUnit(!toggleTemp));
							setToggleTemp(!toggleTemp);
						}}
					/>
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
