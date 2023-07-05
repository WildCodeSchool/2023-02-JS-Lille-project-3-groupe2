import React from "react";
import PropTypes from "prop-types";
import "./ShowMoreBtn.scss";

export default function ShowMoreBtn({ type }) {
  if (type === "default")
    return (
      <div className="showMoreBtnContainerDefault">
        <button type="button" className="ShowMoreBtnDefault">
          Voir plus...
        </button>
      </div>
    );
  if (type === "enterprise")
    return (
      <div className="showMoreBtnContainerEnterprise">
        <button type="button" className="ShowMoreBtnEnterprise">
          Voir plus...
        </button>
      </div>
    );
}

ShowMoreBtn.propTypes = {
  type: PropTypes.string.isRequired,
};
