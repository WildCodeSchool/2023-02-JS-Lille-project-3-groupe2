import "./ModifySection.scss";
import React, { useState } from "react";

export default function ModifySection() {
  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const sectionContents = {
    "Vos Identifiants": (
      <div>
        <h2>Vos identifiants</h2>
        <p>Email actuel : ...</p>
        <label htmlFor="email">Nouvel email :</label>
        <input id="email" type="email" placeholder="johndoe@exemple.com ..." />
        <label htmlFor="password">Votre mot de passe actuel :</label>
        <input id="password" type="password" />
        <label htmlFor="newpassword">Nouveau mot de passe :</label>
        <input id="newpassword" type="password" />
        <label htmlFor="newpassword">Confirmer mot de passe :</label>
        <input id="newpassword" type="password" />
      </div>
    ),
    "Votre Profil": (
      <div>
        <h2>Votre profil</h2>
        <label htmlFor="picture">Image de profil :</label>
        <input id="picture" type="file" />
        <label htmlFor="firstname">Prénom :</label>
        <input id="firstname" type="text" placeholder="John ..." />
        <label htmlFor="lastname">Nom :</label>
        <input id="lastname" type="text" placeholder="Doe ..." />
        <label htmlFor="birthdate">Date de naissance :</label>
        <input
          id="birthdate"
          type="date"
          min="1900-01-01"
          max="2005-07-27"
          pattern="\d{4}-\d{2}-\d{2}"
        />
        <label htmlFor="about">A propos de vous :</label>
        <input
          id="about"
          type="text"
          placeholder="Dites-nous en plus sur vous ! ..."
        />
        <label htmlFor="phonenumber">Téléphone :</label>
        <input id="phonenumber" type="number" placeholder="0606060606 ..." />
      </div>
    ),
    "Votre Adresse": (
      <div>
        <h2>Votre adresse :</h2>
        <label htmlFor="numberway">N° de voirie :</label>
        <input id="numberway" type="number" placeholder="32 ..." />
        <label htmlFor="typeway">Type de voirie :</label>
        <input id="typeway" type="text" placeholder="Rue / Boulevard ..." />
        <label htmlFor="nameway">Nom de voirie :</label>
        <input id="nameway" type="text" placeholder="De la mouette ..." />
        <label htmlFor="postalcode">Code Postal :</label>
        <input id="postalcode" type="number" placeholder="59000 ..." />
        <label htmlFor="city">Ville :</label>
        <input id="city" type="text" placeholder="Lille ..." />
        <label htmlFor="region">Région :</label>
        <input id="region" type="text" placeholder="Haut-de-France ..." />
        <label htmlFor="department">Département :</label>
        <input id="department" type="text" placeholder="Nord ..." />
        <label htmlFor="country">Pays :</label>
        <input id="country" type="text" placeholder="France ..." />
      </div>
    ),
    "Vos Recherches Emploi": (
      <div>
        <h2>Vos recherches d'emploi</h2>
        <h3>Type de contrat :</h3>
        <input id="cdi" type="checkbox" />
        <label htmlFor="cdi">CDI</label>
        <input id="cdd" type="checkbox" />
        <label htmlFor="cdd">CDD</label>
        <input id="alternance" type="checkbox" />
        <label htmlFor="alternance">ALTERNANCE</label>
        <input id="stage" type="checkbox" />
        <label htmlFor="stage">STAGE</label>
        <h3>Métier recherché :</h3>
        <input id="dev" type="checkbox" />
        <label htmlFor="dev">Développeur Web</label>
        <input id="po" type="checkbox" />
        <label htmlFor="po">Product Owner</label>
        <input id="sm" type="checkbox" />
        <label htmlFor="sm">Scrum Master</label>
        <input id="tech" type="checkbox" />
        <label htmlFor="tech">Tech Lead</label>
        <h3>Où ?</h3>
        <label htmlFor="cityjob">Ville de recherche :</label>
        <input id="cityjob" type="text" />
      </div>
    ),
  };

  return (
    <div>
      <h2>Que souhaitez-vous modifier ?</h2>
      <select value={selectedSection} onChange={handleSectionChange}>
        <option value="">Choisissez une section à modifier :</option>
        <option value="Vos Identifiants">Vos Identifiants</option>
        <option value="Votre Profil">Votre Profil</option>
        <option value="Votre Adresse">Votre Adresse</option>
        <option value="Vos Recherches Emploi">Vos Recherches d'emploi</option>
      </select>
      {sectionContents[selectedSection]}
      {selectedSection && <p>Vous êtes dans : {selectedSection}</p>}
    </div>
  );
}
