import "./InformationCard.scss";
import { FiEdit } from "react-icons/fi";

export default function InformationCard() {
  return (
    <div className="container-information-card">
      <div className="title-information">
        <h2>Informations personnelles</h2>
      </div>
      <h2>. . .</h2>
      <div className="container-global-information">
        <div className="name-information">
          <h3>Tessa Fondeur</h3>
        </div>
        <div className="information">
          <h3>Adresse :</h3>
          <p>46 Rue des Champignons 59000 Lille</p>
        </div>
        <div className="information">
          <h3>Téléphone :</h3>
          <p>06 06 06 06 06</p>
        </div>
        <div className="information">
          <h3>Email :</h3>
          <p>tessa.fondeur@gmail.com</p>
        </div>
        <div className="information">
          <h3>Mot de passe :</h3>
          <p>********</p>
        </div>
      </div>
      <div className="btn-container-modal">
        <FiEdit />
      </div>
    </div>
  );
}
