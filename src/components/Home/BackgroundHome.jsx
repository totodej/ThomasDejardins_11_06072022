import "../../style/Home/BackgroundHome.css";
import logo from "../../assets/background-home.jpg";

function BackgroundHome() {
  return (
    <div className="background-home">
      <img src={logo} alt="Chez vous, partout et ailleurs" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default BackgroundHome;
