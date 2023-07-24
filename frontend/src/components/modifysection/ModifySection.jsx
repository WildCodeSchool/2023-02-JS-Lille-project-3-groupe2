import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./ModifySection.scss";

export default function ModifySection({ onBackButtonClick }) {
  const { user } = useAuth();

  // Récupérer et mettre à jour les values du context

  // Récupérer les infos
  const [email, setEmail] = useState(user.userAuth.register_email);
  const [firstname, setFirstname] = useState(user.userInfos.firstname);
  const [lastname, setLastname] = useState(user.userInfos.lastname);
  const [birthdate, setBirthdate] = useState(user.userInfos.birthdate);
  const [phoneNumber, setPhoneNumber] = useState(user.userInfos.phone_number);

  // Les afficher dans les input au chargement du composant
  useEffect(() => {
    setEmail(user.userAuth.register_email);
    setFirstname(user.userInfos.firstname);
    setLastname(user.userInfos.lastname);
    setBirthdate(user.userInfos.birthdate);
    setPhoneNumber(user.userInfos.phone_number);
  }, [user]);

  // Mettre à jour les valeurs
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  // Envoyer les infos update en base de données

  // const saveChanges = async () => {
  //   try {
  //     const updatedUser = {
  //       ...user,
  //       userInfos: {
  //         ...user.userInfos,
  //         firstname: firstname,
  //         lastname: lastname,
  //         register_email: email,

  //       },
  //     };

  //     await axios.put("/user", updatedUser);
  //     setUser(updatedUser);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleSubmitModify = (e) => {
    e.preventDefault();
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
            value={email}
            onChange={handleEmailChange}
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
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={handleLastnameChange}
              placeholder="Doe ..."
            />
            <label htmlFor="firstname">Prénom :</label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={handleFirstnameChange}
              placeholder="John ..."
            />
          </div>
          <div className="right-container-profile">
            <label htmlFor="birthdate">Date de naissance :</label>
            <input
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={handleBirthdateChange}
              min="1900-01-01"
              max="2005-07-27"
              pattern="\d{4}-\d{2}-\d{2}"
            />
            <label htmlFor="phonenumber">Téléphone :</label>
            <input
              id="phonenumber"
              type="number"
              value={phoneNumber}
              onChange={handlePhoneChange}
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
      <div className="btn-preview-submit">
        <button
          className="btn-modify"
          type="button"
          onClick={onBackButtonClick}
        >
          Retour
        </button>
        <button
          className="btn-modify"
          type="submit"
          onClick={handleSubmitModify}
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}

ModifySection.propTypes = {
  onBackButtonClick: PropTypes.func.isRequired,
};
