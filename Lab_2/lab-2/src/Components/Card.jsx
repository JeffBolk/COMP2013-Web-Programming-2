//Jeffrey Bolk
//Card Component JSX

export default function Card(props) {
  return (
    <div className="card-component">
      <img src={props.image} alt="Resort Image" width="150px" />
      <div className="card-content">
        <h3>{props.location}</h3>
        <h5>{props.company}</h5>
        <p
          className={
            parseFloat(props.rating) >= 4 ? "rating-good" : "rating-bad"
          }
        >
          {props.rating} ★
        </p>
        <p>${props.price}/night</p>
      </div>
    </div>
  );
}
