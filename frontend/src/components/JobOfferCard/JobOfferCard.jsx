import React from "react";
import "../../Utils.scss";
import "./JobOfferCard.scss";
import Proptypes from "prop-types";

export default function JobOfferCard({
  image,
  nameCompany,
  jobTitle,
  city,
  experienceTime,
}) {
  return (
    <div className="jobOfferCardContainer">
      <img className="jobOfferCardImg" src={image} alt="logo" />

      <h3 className="jobOfferCardNameCompany">{nameCompany}</h3>
      <div className="jobOfferCardLi">
        <ul className="JobOfferCardUl">
          <li>
            <h5 className="jobOfferCardTitle">{jobTitle}</h5>
          </li>
          <li>
            <span className="jobOfferCardCity">{city}</span>
          </li>
          <li>
            <span className="jobOfferCardXp"> {experienceTime}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

JobOfferCard.propTypes = {
  image: Proptypes.string.isRequired,
  nameCompany: Proptypes.string.isRequired,
  jobTitle: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  experienceTime: Proptypes.string.isRequired,
};
