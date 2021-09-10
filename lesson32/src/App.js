import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ListaPostaci from "./components/ListaPostaci";

function App() {

	const [postaci, setPostaci] = useState(null)

useEffect(()=> {
	fetch('https://rickandmortyapi.com/api/character')
	.then(response => response.json())
	.then(data => setPostaci(data))
},[])

if(!postaci) {

	return (
		<div className="App">
		 Brak danych z backendu
		</div>) 
}



	return (
		<div className="App">
		 <ListaPostaci  postaci={postaci}/>
		</div>
	);
}

export default App;
