import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ListaPostaci from "./components/ListaPostaci";
import Main from "./components2/Main";

function App() {
	// 	const [postaci, setPostaci] = useState(null)

	// useEffect(()=> {
	// 	fetch('https://rickandmortyapi.com/api/character')
	// 	.then(response => response.json())
	// 	.then(data => setPostaci(data))
	// },[])

	// if(!postaci) {

	// 	return (
	// 		<div className="App">
	// 		 Brak danych z backendu
	// 		</div>)
	// }

	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;
