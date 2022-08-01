import arrowBottom from "../assets/fleche-bottom.png";
import "../style/Accordion.css";
import { useState } from "react";

function Accordion(props) {
  const text = props.description;
  const title = props.title;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-title">
        <p>{title}</p>
        <img
          src={arrowBottom}
          alt="fleche bas"
          onClick={() => setIsActive(!isActive)}
          className={isActive ? "rotate" : ""}
        />
      </div>
      {isActive && <div className="accordion-content">{text}</div>}
    </div>
  );
}

export default Accordion;
