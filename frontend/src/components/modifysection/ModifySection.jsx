import PropTypes from "prop-types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./ModifySection.scss";

export default function ModifySection({ onBackButtonClick }) {
  const { user, setUser } = useAuth();
  // console.log("🚀 ~ file: ModifySection.jsx:8 ~ ModifySection ~ user:", user);

  const { ID } = user.userInfos;

  // Récupérer et mettre à jour les values du context

  // Récupérer les infos
  const [email, setEmail] = useState(user.userAuth.register_email);
  const [firstname, setFirstname] = useState(user.userInfos.firstname);
  // console.log("🚀 ~ file: ModifySection.jsx:18 ~ ModifySection ~ firstname:", firstname)
  const [lastname, setLastname] = useState(user.userInfos.lastname);
  // console.log("🚀 ~ file: ModifySection.jsx:20 ~ ModifySection ~ lastname:", lastname)
  const [birthdate, setBirthdate] = useState(user.userInfos.birthdate);
  const [phoneNumber, setPhoneNumber] = useState(user.userInfos.phone_number);
  const [city, setCity] = useState(user.userAddress.city);
  const [department, setDepartment] = useState(user.userAddress.department);
  const [postalcode, setPostalcode] = useState(user.userAddress.postal_code);
  const [region, setRegion] = useState(user.userAddress.region);
  const [streetname, setStreetname] = useState(user.userAddress.street_name);
  const [streettype, setStreettype] = useState(user.userAddress.street_type);
  const [streetnumber, setStreetnumber] = useState(
    user.userAddress.street_number
  );
  const [country, setCountry] = useState(user.userAddress.country);

  // Les afficher dans les input au chargement du composant
  // useEffect(() => {
  //   setEmail(user.userAuth.register_email);
  //   setFirstname(user.userInfos.firstname);
  //   setLastname(user.userInfos.lastname);
  //   setBirthdate(user.userInfos.birthdate);
  //   setPhoneNumber(user.userInfos.phone_number);
  //   setDepartment(user.userAddress.department);
  //   setPostalcode(user.userAddress.postal_code);
  //   setRegion(user.userAddress.region);
  //   setStreetname(user.userAddress.street_name);
  //   setStreettype(user.userAddress.street_type);
  //   setStreetnumber(user.userAddress.street_number);
  //   setCountry(user.userAddress.country);
  // }, [user]);

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
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handlePostalcodeChange = (event) => {
    setPostalcode(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleStreetnameChange = (event) => {
    setStreetname(event.target.value);
  };
  const handleStreetnumberChange = (event) => {
    setStreetnumber(event.target.value);
  };
  const handleStreettypeChange = (event) => {
    setStreettype(event.target.value);
  };
  let updatedUser = {};

  const update = async () => {
    await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/candidate/${ID}`,
      updatedUser
    );
    setUser(updatedUser);
  };
  useEffect(() => {
    if (updatedUser.length > 0) {
      update();
    }
  }, [updatedUser]);
  // Envoyer les infos update en base de données
  const saveChanges = async () => {
    try {
      updatedUser = {
        ...user,
        // userAuth: {
        //   ...user.userAuth,
        //   ID,
        //   account_type: account_type,
        //   active: active,
        //   creation_date: creation_date,
        //   password: password,
        //   register_email: register_email,
        // },
        userInfos: {
          ...user.userInfos,
          lastname,
          firstname,
          birthdate,
          phone_number: phoneNumber,
        },
        userAdress: {
          ...user.userAdress,
          street_number: streetnumber,
          street_type: streettype,
          street_name: streetname,
          city,
          postal_code: postalcode,
          department,
          region,
          country,
        },
      };
    } catch (error) {
      console.error(error);
    }
  };

  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  // const handleSubmitModify = (e) => {
  //   e.preventDefault();
  // };

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
            <input
              id="numberway"
              type="number"
              value={streetnumber}
              onChange={handleStreetnumberChange}
              placeholder="32 ..."
            />
            <label htmlFor="typeway">Type de voirie :</label>
            <input
              id="typeway"
              type="text"
              value={streettype}
              onChange={handleStreettypeChange}
              placeholder="Rue / Boulevard ..."
            />
            <label htmlFor="nameway">Nom de voirie :</label>
            <input
              id="nameway"
              type="text"
              value={streetname}
              onChange={handleStreetnameChange}
              placeholder="De la mouette ..."
            />
            <label htmlFor="postalcode">Code Postal :</label>
            <input
              id="postalcode"
              type="number"
              value={postalcode}
              onClick={handlePostalcodeChange}
              placeholder="59000 ..."
            />
          </div>
          <div className="right-container-address">
            <label htmlFor="city">Ville :</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Lille ..."
            />
            <label htmlFor="region">Région :</label>
            <input
              id="region"
              type="text"
              value={region}
              onChange={handleRegionChange}
              placeholder="Haut-de-France ..."
            />
            <label htmlFor="department">Département :</label>
            <input
              id="department"
              type="text"
              value={department}
              onChange={handleDepartmentChange}
              placeholder="Nord ..."
            />
            <label htmlFor="country">Pays :</label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={handleCountryChange}
              placeholder="France ..."
            />
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
        <button className="btn-modify" type="submit" onClick={saveChanges}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}

ModifySection.propTypes = {
  onBackButtonClick: PropTypes.func.isRequired,
};
