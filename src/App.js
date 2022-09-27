import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<div className="container">
			<div className="App p-2 rounded">
				<Weather />
			</div>
			<small>
				<a
					href="https://github.com/Rakta1/Weather-React/tree/master/weather-react/my-app"
					rel="noopener noreferrer"
					target="_blank"
					className="source"
				>
					Open-Source
				</a>
				, by Terra Wardana
			</small>
		</div>
	);
}

export default App;
