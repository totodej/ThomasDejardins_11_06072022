import { useParams } from "react-router-dom";
import { useEffect } from "react";
import logements from "../data.json";
import AccommodationDetails from "../components/Accommodation/AccommodationDetails";
import "../style/Accommodation/Accommodation.css";
import AccommodationSlide from "../components/Accommodation/AccommodationSlide";
import AccommodationMoreDetails from "../components/Accommodation/AccommodationMoreDetails";
/*import Error from "../pages/Error";*/

function Accommodation() {
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Trigger when params id is updated
  useEffect(() => {
    // vérifier si id est correct sinon redirgier vers 404
  }, [params.id]);

  return (
    <div className="accommodation-container">
      {logements.map((logement, index) => {
        return logement.id === params.id ? (
          <div key={`${index}`}>
            <AccommodationSlide logement={logement} />
            <AccommodationDetails logement={logement} />
            <AccommodationMoreDetails logement={logement} />
          </div>
        ) : null;
      })}
    </div>
  );
}

export default Accommodation;
