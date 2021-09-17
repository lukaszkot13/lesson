import KartaPostaci from "./KartaPostaci";

function ListaPostaci({ postaci }) {
	return (
		<div>
			<h2>Lista postaci ({postaci.lenght})</h2>
			{postaci.map(({ name, image, species }) => (
				<KartaPostaci name={name} species={species} image={image} />
			))}
		</div>
	);
}

export default ListaPostaci;
