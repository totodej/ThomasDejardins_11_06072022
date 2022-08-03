import logo from "../assets/logos/logo_kasa.png";
import { NavLink } from "react-router-dom";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
