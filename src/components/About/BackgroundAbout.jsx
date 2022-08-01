import "../../style/About/BackgroundAbout.css";
import logo from "../../assets/background-about.jpg";

function BackgroundAbout() {
  return (
    <div className="background-about">
      <img src={logo} alt="Chez vous, partout et ailleurs" />
    </div>
  );
}

export default BackgroundAbout;
