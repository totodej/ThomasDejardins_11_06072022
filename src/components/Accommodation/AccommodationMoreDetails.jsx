import "../../style/Accommodation/AccommodationMoreDetails.css";
import Accordion from "../Accordion";

function AccommodationMoreDetails(props) {
  const logement = props.logement;

  return (
    <div className="accordion-container">
      <Accordion description={logement.description} title={"Description"} />
      <Accordion
        description={logement.equipments.map((equipment, index) => {
          return <li key={index}>{equipment}</li>;
        })}
        title={"Equipements"}
      />
    </div>
  );
}

export default AccommodationMoreDetails;
