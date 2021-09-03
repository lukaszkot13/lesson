import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
	return (
		<div className="App">
			<h1>Counter</h1>
			<Counter defultValue={150} step={2} />
		</div>
	);
}

export default App;
