import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timmer";
import { useState } from "react";

function App() {
const [component, setComponent] = useState('counter')

const handelClick = () => {
	setComponent(component == 'timer' ? 'counter' : 'timer')
}

let jsx 

if (component == 'counter'){
	jsx = <Counter defultValue={150} step={2} />
} else if (component == 'timer'){
	jsx = <Timer /> 
}
	return (
		<div className="App">
			{jsx} // 2 rozwiązanie częściej uzywane
			{/* pierwsze rozwiązanie mniej uzywane  */}
			{/* {component == 'counter' && <Counter defultValue={150} step={2} /> }
			{component == 'timer' && <Timer />} */} 
			<button onClick={handelClick}>Show {component == ' counter' ? 'timer' : 'counter'}</button>
		
		</div>
	);
}

export default App;
