import PropTypes from "prop-types";
import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useAuth } from "../../contexts/AuthContext";
import "./ModifySection.scss";
import api from "../../services/api";

export default function ModifySection({ onBackButtonClick }) {
  const { user, setUser } = useAuth();
  const formatMySQLDateToInputFormat = (mysqlDate) => {
    // Assuming the MySQL date is in the format "yyyy-mm-ddTHH:mm:ss.sssZ"
    // Convert it to "yyyy-mm-dd" for the input element
    const dateObject = new Date(mysqlDate);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [updateUser, setUpdatedUser] = useState({
    user_id: user.userInfos.ID,
    account_type: user.userAuth.account_type,
    active: user.userAuth.active,
    creation_date: user.userAuth.creation_date,
    register_email: user.userAuth.register_email,
    about: user.userInfos.about,
    auth_ID: user.userInfos.auth_ID,
    birthdate: formatMySQLDateToInputFormat(user.userInfos.birthdate),
    firstname: user.userInfos.firstname,
    lastname: user.userInfos.lastname,
    phone_number: user.userInfos.phone_number,
    picture_url: user.userInfos.picture_url,
    street_number: user.userAddress.street_number,
    street_type: user.userAddress.street_type,
    street_name: user.userAddress.street_name,
    city: user.userAddress.city,
    postal_code: user.userAddress.postal_code,
    department: user.userAddress.department,
    region: user.userAddress.region,
    country: user.userAddress.country,
    address_id: user.userAddress.ID,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUpdatedUser((prev) => ({ ...prev, [id]: value }));
  };
  const [selectedSection, setSelectedSection] = useState("");
  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const putUser = async () => {
    await api.put(`/candidate/${updateUser.user_id}`, updateUser);
    await setUser((prev) => ({
      ...prev, // Use the existing `prev` object as the starting point
      userAuth: {
        ID: updateUser.auth_ID,
        account_type: updateUser.account_type,
        active: updateUser.active,
        creation_date: updateUser.creation_date,
        register_email: updateUser.register_email,
      },
      userInfos: {
        ...prev.userInfos, // Preserve the existing properties in `prev.userInfos`
        ID: updateUser.user_id,
        auth_ID: updateUser.auth_ID,
        about: updateUser.about,
        birthdate: updateUser.birthdate,
        firstname: updateUser.firstname,
        lastname: updateUser.lastname,
        phone_number: updateUser.phone_number,
        picture_url: updateUser.picture_url,
      },
      userAddress: {
        ...prev.userAddress, // Preserve the existing properties in `prev.userAddress`
        ID: updateUser.address_id,
        candidate_ID: updateUser.user_id,
        street_number: updateUser.street_number,
        street_type: updateUser.street_type,
        street_name: updateUser.street_name,
        city: updateUser.city,
        postal_code: updateUser.postal_code,
        department: updateUser.department,
        region: updateUser.region,
        country: updateUser.country,
      },
    }));
    onBackButtonClick();
  };
  const sectionContents = {
    "Vos Identifiants": (
      <div className="auth-section">
        <h1>Vos identifiants</h1>
        <div className="container-auth-section">
          <label htmlFor="register_email">Email :</label>
          <input
            readOnly
            id="register_email"
            type="email"
            value={updateUser.register_email}
            onChange={(e) => handleChange(e)}
            placeholder="johndoe@exemple.com ..."
          />
          <label htmlFor="password">Nouveau mot de passe :</label>
          <div className="password">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={updateUser.password}
              onChange={(e) => handleChange(e)}
            />
            <AiFillEye onClick={() => handleShowPassword()} />
          </div>
        </div>
      </div>
    ),
    "Votre Profil": (
      <div className="profile-section">
        <h1>Votre profil</h1>
        <div className="container-all-profile">
          <div className="left-container-profile">
            <label htmlFor="picture_url">Image de profil :</label>
            <input id="picture_url" type="file" />
            <label htmlFor="lastname">Nom :</label>
            <input
              id="lastname"
              type="text"
              value={updateUser.lastname}
              onChange={(e) => handleChange(e)}
              placeholder="Doe ..."
            />
            <label htmlFor="firstname">Prénom :</label>
            <input
              id="firstname"
              type="text"
              value={updateUser.firstname}
              onChange={(e) => handleChange(e)}
              placeholder="John ..."
            />
          </div>
          <div className="right-container-profile">
            <label htmlFor="birthdate">Date de naissance :</label>
            <input
              id="birthdate"
              type="date"
              value={updateUser.birthdate}
              onChange={(e) => handleChange(e)}
              min="1900-01-01"
              max="2005-07-27"
              pattern="\d{4}-\d{2}-\d{2}"
            />
            <label htmlFor="phone_number">Téléphone :</label>
            <input
              id="phone_number"
              type="text"
              inputMode="numeric"
              value={updateUser.phone_number}
              onChange={(e) => handleChange(e)}
              placeholder="0606060606 ..."
            />
            <label htmlFor="about">A propos de vous :</label>
            <input
              id="about"
              value={updateUser.about}
              onChange={(e) => handleChange(e)}
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
            <label htmlFor="street_number">N° de voirie :</label>
            <input
              id="street_number"
              type="number"
              value={updateUser.street_number}
              onChange={(e) => handleChange(e)}
              placeholder="32 ..."
            />
            <label htmlFor="street_type">Type de voirie :</label>
            <input
              id="street_type"
              type="text"
              value={updateUser.street_type}
              onChange={(e) => handleChange(e)}
              placeholder="Rue / Boulevard ..."
            />
            <label htmlFor="street_name">Nom de voirie :</label>
            <input
              id="street_name"
              type="text"
              value={updateUser.street_name}
              onChange={(e) => handleChange(e)}
              placeholder="De la mouette ..."
            />
            <label htmlFor="postal_code">Code Postal :</label>
            <input
              id="postal_code"
              type="number"
              value={updateUser.postal_code}
              onChange={(e) => handleChange(e)}
              placeholder="59000 ..."
            />
          </div>
          <div className="right-container-address">
            <label htmlFor="city">Ville :</label>
            <input
              id="city"
              type="text"
              value={updateUser.city}
              onChange={(e) => handleChange(e)}
              placeholder="Lille ..."
            />
            <label htmlFor="region">Région :</label>
            <input
              id="region"
              type="text"
              value={updateUser.region}
              onChange={(e) => handleChange(e)}
              placeholder="Haut-de-France ..."
            />
            <label htmlFor="department">Département :</label>
            <input
              id="department"
              type="text"
              value={updateUser.department}
              onChange={(e) => handleChange(e)}
              placeholder="Nord ..."
            />
            <label htmlFor="country">Pays :</label>
            <input
              id="country"
              type="text"
              value={updateUser.country}
              onChange={(e) => handleChange(e)}
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
        <button className="btn-modify" type="submit" onClick={() => putUser()}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}

ModifySection.propTypes = {
  onBackButtonClick: PropTypes.func.isRequired,
};
