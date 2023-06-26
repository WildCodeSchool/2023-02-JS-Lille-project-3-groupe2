import React from "react";
import "./Teaser.scss";
import { FaSearch } from "react-icons/fa";
import Image from "../../assets/catch-phrase1 (1).png";

function Teaser() {
  return (
    <div className="containerSearch">
      <div className="img1">
        <img src={Image} alt="texte d'accroche" />
      </div>
      <div className="search">
        <input
          className="search-bar"
          type="search"
          placeholder="Quoi ? Métier, entreprise..."
        />
        <input
          className="search-bar"
          type="search"
          placeholder="Où ? Ville,département..."
        />
        <div className="buttonSearch">
          <button type="button">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Teaser;
