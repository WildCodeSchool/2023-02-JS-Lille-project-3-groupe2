import React from "react";
import PropTypes from "prop-types";

export default function ButtonModify({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Modifier
      </button>
    </div>
  );
}

ButtonModify.propTypes = {
  onClick: PropTypes.func.isRequired,
};
