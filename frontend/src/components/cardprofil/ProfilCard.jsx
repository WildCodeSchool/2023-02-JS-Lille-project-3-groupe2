import "./ProfilCard.scss";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSmile } from "react-icons/ai";

export default function ProfilCard() {
  return (
    <div className="profil-card-container">
      <div className="container-left-profil">
        <img src="./src/assets/photocv1.1.jpg" alt="profil" />
        <p>[ Ajouter une citation qui parle de vous ! ]</p>
      </div>
      <div className="container-right-profil">
        <h2>
          Bonjour <span>Tessa</span> ! <AiOutlineSmile />
        </h2>
        <div className="item-profil">
          <h3>
            <li>Je suis à la recherche de :</li>
          </h3>
          <p>CDI, CDD, Interim ...</p>
        </div>
        <div className="item-profil">
          <h3>
            <li>En tant que :</li>
          </h3>
          <p>Développeuse Web FullSatck</p>
        </div>
        <div className="item-profil">
          <h3>
            <li>Lieu souhaité :</li>
          </h3>
          <p>Haut-de-France</p>
        </div>
        <div className="item-profil">
          <h3>
            <li>Disponibilité :</li>
          </h3>
          <p>22.02.2024</p>
        </div>
      </div>
      <div className="button-container-modal">
        <FiEdit />
      </div>
    </div>
  );
}
