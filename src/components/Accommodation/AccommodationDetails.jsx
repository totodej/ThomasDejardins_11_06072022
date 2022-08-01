import "../../style/Accommodation/AccommodationDetails.css";
import redStar from "../../assets/redStar.png";
import emptyStar from "../../assets/emptyStar.png";

function AccommodationDetails(props) {
  const logement = props.logement;

  function getRating() {
    const arrayRating = [];
    for (let i = 1; i <= 5; i++) {
      i > logement.rating ? arrayRating.push("grey") : arrayRating.push("red");
    }
    return arrayRating;
  }

  return (
    <div className="accommodation-details-container">
      <div>
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <div className="accommodation-tags">
          {logement.tags.map((tag, index) => {
            return <p key={`${index}`}>{tag}</p>;
          })}
        </div>
      </div>

      <div className="accommodation-informations">
        <div className="accommodation-host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        <div className="accommodation-stars">
          {getRating().map((color, index) => {
            return color === "red" ? (
              <img key={index} src={redStar} alt="étoile rouge" />
            ) : (
              <img key={index} src={emptyStar} alt="étoile grise" />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccommodationDetails;
