import "./Card.styles.css";

const Card = ({ monster }) => {
  console.log('monster in Card comp: ', monster)
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
