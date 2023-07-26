import React, { useState } from "react";
import ModalApply from "../applymodal/ModalApply";
import "./ApplyButton.scss";

export default function ApplyButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="btn-modal-apply">
      {!modalIsOpen && (
        <button type="button" className="btn-apply" onClick={handleModalOpen}>
          Postuler
        </button>
      )}
      <ModalApply
        isOpenModal={modalIsOpen}
        onCloseModal={handleModalClose}
        onRequestClose={handleModalClose}
        ariaHideApp={false}
      />
    </div>
  );
}
