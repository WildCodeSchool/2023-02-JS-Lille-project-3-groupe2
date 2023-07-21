import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./BurgerButton.scss";
import { useAuth } from "../../contexts/AuthContext";

export default function BurgerButton() {
  const { user } = useAuth();

  const defaultStyle = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#611959",
    },
    bmBurgerBarsHover: {
      background: "#611959",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#611959",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden !important",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
    Button_container_candidate: {
      height: "100px",
    },
  };
  const enterpriseStyle = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#3d78b8",
    },
    bmBurgerBarsHover: {
      background: "#3d78b8",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#3d78b8",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden !important",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
    Button_container_enterprise: {
      height: "100px",
    },
  };
  if (user.userAuth.account_type === "candidat")
    return (
      <div className="Button_container_candidate">
        <Menu noOverlay className="my-menu" styles={defaultStyle}>
          <Link to="/" className="burger_links">
            Accueil
          </Link>
          <Link to="/candidate/profile" className="burger_links">
            Mon Espace
          </Link>
          <Link to="/candidate/offer" className="burger_links">
            Offres d'emploi
          </Link>
          <Link to="/about_us" className="burger_links">
            À propos de nous
          </Link>
          <Link to="/contact" className="burger_links">
            Contact
          </Link>
        </Menu>
      </div>
    );
  if (user.userAuth.account_type === "entreprise")
    return (
      <div className="Button_container_candidate">
        <Menu noOverlay className="my-menu" styles={enterpriseStyle}>
          <Link to="/" className="burger_links">
            Accueil
          </Link>
          <Link to="/enterprise/profile" className="burger_links">
            Mon Espace
          </Link>
          <Link to="enterprise/offer" className="burger_links">
            Offres d'emploi
          </Link>
          <Link to="/about_us" className="burger_links">
            À propos de nous
          </Link>
          <Link to="/contact" className="burger_links">
            Contact
          </Link>
        </Menu>
      </div>
    );
  return (
    <div className="Button_container_candidate">
      <Menu noOverlay className="my-menu" styles={defaultStyle}>
        <Link to="/" className="burger_links">
          Accueil
        </Link>
        <Link to="/register" className="burger_links">
          S'inscrire
        </Link>
        <Link to="/offer" className="burger_links">
          Offres d'emploi
        </Link>
        <Link to="/about_us" className="burger_links">
          À propos de nous
        </Link>
        <Link to="/contact" className="burger_links">
          Contact
        </Link>
      </Menu>
    </div>
  );
}
