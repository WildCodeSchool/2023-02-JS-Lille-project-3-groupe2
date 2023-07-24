import React from "react";
import PropTypes from "prop-types";
import "./ButtonModify.scss";

export default function ButtonModify({ onClick }) {
  return (
    <div>
      <button className="btn-modify-profile" type="button" onClick={onClick}>
        Modifier
      </button>
    </div>
  );
}

ButtonModify.propTypes = {
  onClick: PropTypes.func.isRequired,
};
