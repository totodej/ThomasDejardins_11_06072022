import "../style/Footer.css";
import logoWhite from "../assets/logos/logo_kasa_white.png";

function Footer() {
  return (
    <div className="background-footer">
      <img src={logoWhite} alt="logo blanc" />
      <p>©2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
