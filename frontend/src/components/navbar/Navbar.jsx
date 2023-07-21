import BurgerButton from "../burgerbutton/BurgerButton";
import "./Navbar.scss";
import externaticCandidate from "../../assets/externatic_logo_candidate.png";
import externaticEnterprise from "../../assets/externatic_logo_enterprise.png";
import LoginButton from "../loginbutton/LoginButton";
import { useAuth } from "../../contexts/AuthContext";
import DisconnectButton from "../disconnectbutton/DisconnectButton";

export default function Navbar() {
  const { user } = useAuth();
  const type = user.userAuth.account_type;
  // We need to make parents div too not account for  burger button which is absolute
  if (type === "candidat")
    return (
      <nav className="navbar_default">
        <BurgerButton type="default" />
        <img
          className="logo_navbar"
          src={externaticCandidate}
          alt="externatic_logo"
        />
        <DisconnectButton />
      </nav>
    );
  if (type === "entreprise")
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
}
