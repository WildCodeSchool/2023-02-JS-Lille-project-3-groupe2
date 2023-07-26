import React from "react";
import PropTypes from "prop-types";
import { RxCrossCircled } from "react-icons/rx";
import "./ModalApply.scss";

export default function ModalApply({ isOpenModal, onCloseModal }) {
  if (!isOpenModal) return null;

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
              <h2>Tessa Fondeur</h2>
              <p>Téléphone : 0606060606</p>
              <img
                src="https://www.akor-alternance.com/wp-content/uploads/2017/11/photo-profil-cv-e1512731498394.png"
                alt="profil"
              />
              <p>[ Une citation qui parle de vous ! ]</p>
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
            <button className="submit-btn" type="submit">
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
};
