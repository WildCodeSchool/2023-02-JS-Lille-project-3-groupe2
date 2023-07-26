import React, { useState } from "react";
import PropTypes from "prop-types";
import { RxCrossCircled } from "react-icons/rx";
import "./ModalApply.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../services/api";

export default function ModalApply({ isOpenModal, onCloseModal, offerID }) {
  const navigate = useNavigate();
  const { user, isLogin } = useAuth();
  const [emailContact, setEmailContact] = useState("");
  if (!isOpenModal) return null;
  if (!isLogin) navigate("/login");

  const handlePostuler = async () => {
    try {
      await api.post(`/candidate/${user.userInfos.ID}/candicacy`, {
        email_contact: emailContact,
        offerId: offerID,
      });
      onCloseModal();
      Swal.fire("", "Ta candidature a bien été prise en compte.", "success");
    } catch (error) {
      onCloseModal();
      if (error.response.status) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tu as déjà postulé à cette annonce !",
        });
      }
    } finally {
      navigate("/offer");
    }
  };
  if (isLogin)
    return (
      <div className="modal-apply">
        <div className="modal-container-all">
          <div className="title-modal-button">
            <h1>Votre Candidature</h1>
            <button className="closebtn" type="button" onClick={onCloseModal}>
              <RxCrossCircled />
            </button>
          </div>
          <form className="form-container">
            <div className="profil-card-container">
              <div className="container-left-profil">
                <h2>
                  {`${user.userInfos.firstname} ${user.userInfos.lastname}`}
                </h2>
                <p>Téléphone : {user.userInfos.phone_number}</p>
                <img
                  src="https://www.akor-alternance.com/wp-content/uploads/2017/11/photo-profil-cv-e1512731498394.png"
                  alt="profil"
                />
                <p>[ Une citation qui parle de vous ! ]</p>
                <p>{user.userInfos.about}</p>
              </div>
            </div>
            <div className="container-right-profil">
              <div className="input-container">
                <div className="first-input">
                  <label htmlFor="emailcontact">Email de contact :</label>
                  <input
                    id="emailcontact"
                    type="email"
                    placeholder="Ex : johndoe@exemple.com"
                    value={emailContact}
                    onChange={(e) => setEmailContact(e.target.value)}
                  />
                </div>
                <div className="second-input">
                  <label htmlFor="cv">Curriculum Vitae (CV) :</label>
                  <input id="cv" type="file" />
                </div>
                <div className="third-input">
                  <label htmlFor="letter">Lettre de motivation :</label>
                  <input id="letter" type="file" />
                </div>
              </div>
            </div>
            <div className="btn-send">
              <button
                className="submit-btn"
                type="button"
                onClick={() => handlePostuler()}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

ModalApply.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.bool.isRequired,
  offerID: PropTypes.string.isRequired,
};
