import { FiEdit } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";
import "./InformationCard.scss";

export default function InformationCard() {
  const { user } = useAuth();

  return (
    <div className="container-information-card">
      <div className="title-information">
        <h2>Informations personnelles</h2>
      </div>
      <h2>. . .</h2>
      <div className="container-global-information">
        <div className="name-information">
          <h3>
            {user.userInfos.firstname} {user.userInfos.lastname}
          </h3>
        </div>
        <div className="information">
          <h3>Adresse :</h3>
          <p>Need to add a fetch for address based on context</p>
        </div>
        <div className="information">
          <h3>Téléphone :</h3>
          <p>{user.userInfos.phone_number}</p>
        </div>
        <div className="information">
          <h3>Email :</h3>
          <p>{user.userAuth.register_email}</p>
        </div>
        <div className="information">
          <h3>Changer mot de passe</h3>
        </div>
      </div>
      <div className="btn-container-modal">
        <FiEdit />
      </div>
    </div>
  );
}
