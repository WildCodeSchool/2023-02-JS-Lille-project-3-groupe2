import React from "react";
import "./Teaser.scss";
import { FaSearch } from "react-icons/fa";
import Image from "../../assets/catch-phrase1 (1).png";

function Teaser() {
  return (
    <div className="containerSearch">
      <img className="imageHomepage" src={Image} alt="texte d'accroche" />
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
        <button type="button">
          <FaSearch className="loupe" />
        </button>
      </div>
    </div>
  );
}

export default Teaser;
