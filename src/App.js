import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<div className="App p-2 rounded">
			<div className="container">
				<Weather />
			</div>
			<footer>
				<a
					href="https://github.com/Rakta1/Weather-React"
					rel="noopener noreferrer"
					target="_blank"
					className="source"
				>
					Open-Source
				</a>
				, by Terra Wardana
			</footer>
		</div>
	);
}

export default App;
