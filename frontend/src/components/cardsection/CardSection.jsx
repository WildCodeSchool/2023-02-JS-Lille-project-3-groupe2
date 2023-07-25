import { AiOutlineSmile } from "react-icons/ai";
import { useAuth } from "../../contexts/AuthContext";
import "./CardSection.scss";

export default function CardSection() {
  const { user } = useAuth();

  return (
    <div className="card-section-profil">
      <div className="container-left-profil">
        <h1>
          Bonjour <span>Tessa</span> ! <AiOutlineSmile />
        </h1>
        <div className="picture-profile">
          <img
            src="https://www.akor-alternance.com/wp-content/uploads/2017/11/photo-profil-cv-e1512731498394.png"
            alt="profil"
          />
        </div>
        <p>[ Parlez-nous de vous ! ]</p>
        <p>{user.userInfos.about}</p>
      </div>
      <div className="container-right-profil">
        <div className="title-information">
          <h1>Informations personnelles</h1>
        </div>
        <h1>. . .</h1>
        <div className="container-global-information">
          <div className="name-information">
            <h2>
              {user.userInfos.firstname} {user.userInfos.lastname}
            </h2>
          </div>
          <div className="information">
            <h2>Adresse :</h2>
            <p>
              {`${user.userAddress.street_number} 
               ${user.userAddress.street_type}
               ${user.userAddress.street_name}
               ${user.userAddress.city}
               ${user.userAddress.postal_code}
               ${user.userAddress.department}
               ${user.userAddress.region}
               ${user.userAddress.country}`}
            </p>
          </div>
          <div className="information">
            <h2>Téléphone :</h2>
            <p>{user.userInfos.phone_number}</p>
          </div>
          <div className="information">
            <h2>Email :</h2>
            <p>{user.userAuth.register_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
