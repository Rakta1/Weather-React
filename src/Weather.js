import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
	const [city, setCity] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [weather, setWeather] = useState({});

	function displayWeather(response) {
		setLoaded(true);
		setWeather({
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "be6fdca8e2e91988e4c676b7fb94a33b";
		let units = "imperial";
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
		axios.get(url).then(displayWeather);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}
	let form = (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Enter a city"
				onChange={updateCity}
				className="rounded m-2"
			/>
			<button type="submit" className="rounded">
				search
			</button>
		</form>
	);
	if (loaded) {
		return (
			<div className="Weather">
				{form}
				<h1>{city}</h1>
				<ul>
					<li>
						<img src={weather.icon} alt={weather.description} />
					</li>
					<li>Temperature: {Math.round(weather.temperature)}°F</li>
					<li>Description: {weather.description}</li>
					<li>Humidity: {weather.humidity}%</li>
					<li>Wind: {weather.wind}km/h</li>
				</ul>
			</div>
		);
	} else {
		return form;
	}
}
