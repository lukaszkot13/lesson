import KartaPostaci from "./KartaPostaci";

function ListaPostaci({ postaci, ilosc }) {
  return (
    <div>
      <h2>Lista postaci ({postaci.info.count})</h2>
      {postaci.results
        .filter((item, index) => index < 5)
        .map(({ name, image, speciec }) => (
          <KartaPostaci name={name} speciec={speciec} image={image} />
        ))}
    </div>
  );
}

export default ListaPostaci;
