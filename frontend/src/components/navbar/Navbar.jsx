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
        <div className="test">
          {" "}
          <BurgerButton type="default" />
        </div>
        <div className="navbar_img_parent">
          {" "}
          <img src={externaticCandidate} alt="externatic_logo" />
        </div>{" "}
        <LoginButton />
      </nav>
    );
  if (type === "enterprise")
    return (
      <nav className="navbar_enterprise">
        <BurgerButton type="enterprise" />
        <div className="navbar_img_parent">
          {" "}
          <img src={externaticEnterprise} alt="externatic_logo" />
        </div>
        <LoginButton />
      </nav>
    );
}
Navbar.propTypes = {
  type: PropTypes.string.isRequired,
};
