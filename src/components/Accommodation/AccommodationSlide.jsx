import "../../style/Accommodation/AccommodationSlide.css";
import arrowRight from "../../assets/fleche-right.png";
import arrowLeft from "../../assets/fleche-left.png";
import { useState } from "react";

function AccommodationSlide(props) {
  const logement = props.logement;
  const [current, setCurrent] = useState(0);
  const length = logement.pictures.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  console.log(current);

  if (!Array.isArray(logement.pictures) || length <= 0) {
    return null;
  }

  return (
    <div className="slide-container">
      {logement.pictures.map((picture, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slides active" : "slides"}
          >
            {index === current && <img src={picture} alt="logement" />}
          </div>
        );
      })}
      <img
        className="prev"
        src={arrowLeft}
        alt="arrow left"
        onClick={prevSlide}
      />
      <img
        className="next"
        src={arrowRight}
        alt="arrow right"
        onClick={nextSlide}
      />
    </div>
  );
}

export default AccommodationSlide;
