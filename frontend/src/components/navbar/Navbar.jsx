import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/externatic_logo_candidate.png";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="logoNavbar">
        <img src={logo} alt="externatic_logo" />
      </div>
      <div className="menuNavbar">
        <ul>
          <li>
            {" "}
            <Link to="/">Accueil</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Offres</Link>
          </li>
          <li>
            {" "}
            <Link to="/">À propos</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="loginNavbar">
        <button type="button">Sign in</button>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
}
