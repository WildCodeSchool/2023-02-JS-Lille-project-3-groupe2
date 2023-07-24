import "./ModifySection.scss";
import React, { useState } from "react";

export default function ModifySection() {
  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const sectionContents = {
    "Vos Identifiants": (
      <div className="auth-section">
        <h1>Vos identifiants</h1>
        <div className="container-auth-section">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@exemple.com ..."
          />
          <label htmlFor="password">Votre mot de passe actuel :</label>
          <input id="password" type="password" />
          <label htmlFor="newpassword">Nouveau mot de passe :</label>
          <input id="newpassword" type="password" />
          <label htmlFor="newpassword">Confirmer mot de passe :</label>
          <input id="newpassword" type="password" />
        </div>
      </div>
    ),
    "Votre Profil": (
      <div className="profile-section">
        <h1>Votre profil</h1>
        <div className="container-all-profile">
          <div className="left-container-profile">
            <label htmlFor="picture">Image de profil :</label>
            <input id="picture" type="file" />
            <label htmlFor="lastname">Nom :</label>
            <input id="lastname" type="text" placeholder="Doe ..." />
            <label htmlFor="firstname">Prénom :</label>
            <input id="firstname" type="text" placeholder="John ..." />
          </div>
          <div className="right-container-profile">
            <label htmlFor="birthdate">Date de naissance :</label>
            <input
              id="birthdate"
              type="date"
              min="1900-01-01"
              max="2005-07-27"
              pattern="\d{4}-\d{2}-\d{2}"
            />
            <label htmlFor="phonenumber">Téléphone :</label>
            <input
              id="phonenumber"
              type="number"
              placeholder="0606060606 ..."
            />
            <label htmlFor="about">A propos de vous :</label>
            <input
              id="about"
              type="text"
              placeholder="Dites-nous en plus sur vous ! ..."
            />
          </div>
        </div>
      </div>
    ),
    "Votre Adresse": (
      <div className="address-section">
        <h1>Votre adresse :</h1>
        <div className="container-address-all">
          <div className="left-container-address">
            <label htmlFor="numberway">N° de voirie :</label>
            <input id="numberway" type="number" placeholder="32 ..." />
            <label htmlFor="typeway">Type de voirie :</label>
            <input id="typeway" type="text" placeholder="Rue / Boulevard ..." />
            <label htmlFor="nameway">Nom de voirie :</label>
            <input id="nameway" type="text" placeholder="De la mouette ..." />
            <label htmlFor="postalcode">Code Postal :</label>
            <input id="postalcode" type="number" placeholder="59000 ..." />
          </div>
          <div className="right-container-address">
            <label htmlFor="city">Ville :</label>
            <input id="city" type="text" placeholder="Lille ..." />
            <label htmlFor="region">Région :</label>
            <input id="region" type="text" placeholder="Haut-de-France ..." />
            <label htmlFor="department">Département :</label>
            <input id="department" type="text" placeholder="Nord ..." />
            <label htmlFor="country">Pays :</label>
            <input id="country" type="text" placeholder="France ..." />
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="container-selection">
      <h1>Que souhaitez-vous modifier ?</h1>
      <div>
        <select
          className="options-selection"
          value={selectedSection}
          onChange={handleSectionChange}
        >
          <option value="">Choisissez une section à modifier</option>
          <option value="Vos Identifiants">Vos Identifiants</option>
          <option value="Votre Profil">Votre Profil</option>
          <option value="Votre Adresse">Votre Adresse</option>
        </select>
      </div>
      <div className="section-part-container">
        {sectionContents[selectedSection]}
      </div>
      <div>{selectedSection && <p>Vous êtes dans : {selectedSection}</p>}</div>
    </div>
  );
}
