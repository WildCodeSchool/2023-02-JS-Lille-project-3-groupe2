import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerButton.scss";

export default function BurgerButton() {
  return (
    <div>
      <Menu>
        <div>
          <Link className="menu-item" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="menu-item" to="/user/register">
            S'inscrire
          </Link>
        </div>
        <div>
          <Link className="menu-item" to="/user/login">
            Connexion
          </Link>
        </div>
        <div>
          <Link className="menu-item" to="/user/offer">
            Offres d'emplois
          </Link>
        </div>
      </Menu>
    </div>
  );
}
