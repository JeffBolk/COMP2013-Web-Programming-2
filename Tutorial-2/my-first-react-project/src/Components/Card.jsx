export default function Card(props) {
  return (
    <div
      className={
        props.sale ? "Card-Component Card-Sale-Glow" : "Card-Component"
      }
    >
      <img
        className="imageComponent"
        src={props.image}
        alt="princess"
        width="100px"
      />
      <h2>{props.description}</h2>
      {props.sale ? <h3 className="Card-Sale">On Sale!</h3> : <h3>&nbsp;</h3>}
      <p>{props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
