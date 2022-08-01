import "../style/Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  const logement = props.logement;

  return (
    <Link to={`/accommodation/${logement.id}`} className="home-card">
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.title}</p>
    </Link>
  );
}

export default Card;
