function KartaPostaci({ name, image, speciec }) {
  return (
    <div className="card" data-name={name}>
      <img src={image} alt={name} />
      <div className="container">
        <h4>{name}</h4>
        <p>{speciec}</p>
      </div>
    </div>
  );
}
export default KartaPostaci;
