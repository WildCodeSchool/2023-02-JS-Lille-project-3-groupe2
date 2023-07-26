import React from "react";
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import DescriptionOffer from "../description-offer/DescriptionOffer";
import "./ViewOfferModal.scss";

export default function ViewOfferModal({ onClose }) {
  return (
    <div className="container-modal-offer">
      <div className="modal-offer">
        <div className="container-btn-close">
          <button type="button" onClick={onClose}>
            <RxCross2 />
          </button>
        </div>
        <div className="view-modal">
          <DescriptionOffer />
        </div>
      </div>
    </div>
  );
}

ViewOfferModal.propTypes = {
  onClose: PropTypes.bool.isRequired,
};
