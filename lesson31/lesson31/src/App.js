import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timmer";

function App() {


	return (
		<div className="App">
			<h1>Counter</h1>
			{/* <Counter defultValue={150} step={2} /> */}
			<Timer />
		
		</div>
	);
}

export default App;
