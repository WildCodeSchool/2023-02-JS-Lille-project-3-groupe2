import PropTypes from "prop-types";
import BurgerButton from "../burgerbutton/BurgerButton";
import "./Navbar.scss";
import externaticCandidate from "../../assets/externatic_logo_candidate.png";
import externaticEnterprise from "../../assets/externatic_logo_enterprise.png";
import LoginButton from "../loginbutton/LoginButton";

export default function Navbar({ type }) {
  // We need to make parents div too not account for  burger button which is absolute
  if (type === "default")
    return (
      <nav className="navbar_default">
        <BurgerButton type="default" />

        <img
          className="logo_navbar"
          src={externaticCandidate}
          alt="externatic_logo"
        />
        <LoginButton />
      </nav>
    );
  if (type === "enterprise")
    return (
      <nav className="navbar_enterprise">
        <BurgerButton type="enterprise" />

        <img
          className="logo_navbar"
          src={externaticEnterprise}
          alt="externatic_logo"
        />
        <LoginButton />
      </nav>
    );
}
Navbar.propTypes = {
  type: PropTypes.string.isRequired,
};
