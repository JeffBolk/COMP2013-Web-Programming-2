export default function Card(props) {
  return (
    <div className="Card-Component">
      <img id="imageComponent" src={props.image} alt="princess" width="100px" />
      <h2>{props.description}</h2>
      <p>$1,350</p>
    </div>
  );
}
