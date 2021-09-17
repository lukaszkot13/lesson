import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import ListaPostaci from "./components/ListaPostaci";
import axios from "axios";
import HorizontalLinearStepper from "./components2/HorizontalLinearStepper";

function App() {
	const [postaci, setPostaci] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:3000/charakters")
			.then((result) => setPostaci(result.data));
	}, []);

	const dodajNowaPostac = () => {
		const example = {
			id: 6,
			name: "Mateusz Gabriel",
			status: "Alive",
			species: "Alien",
			type: "",
			gender: "Male",
			origin: {
				name: "Earth (Replacement Dimension)",
				url: "https://rickandmortyapi.com/api/location/20",
			},
			location: {
				name: "Earth (Replacement Dimension)",
				url: "https://rickandmortyapi.com/api/location/20",
			},
			image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
			url: "https://rickandmortyapi.com/api/character/5",
			created: "2017-11-04T19:26:56.301Z",
		};
		example.species = "Human";
		axios.post("http://localhost:3000/charakters", example);
	};

	const usunPostac = () => {
		axios.delete("http://localhost:3000/charakters/6");
	};

	if (!postaci) {
		return <div className="App">Brak danych z backendu</div>;
	}

	return (
		<div className="App">
			{/* <ListaPostaci postaci={postaci} /> */}
			<HorizontalLinearStepper listData={postaci} />
			<Button
				variant="contained"
				color="primary"
				onClick={dodajNowaPostac}
			>
				Dodaj
			</Button>
			<Button variant="contained" color="primary" onClick={usunPostac}>
				Usuń postać
			</Button>
		</div>
	);
}

export default App;
