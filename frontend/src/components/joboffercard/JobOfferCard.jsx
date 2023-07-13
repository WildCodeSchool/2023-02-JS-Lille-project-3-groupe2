import React from "react";
import "../../Utils.scss";
import "./JobOfferCard.scss";
import Proptypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export default function JobOfferCard({
  image,
  nameCompany,
  jobTitle,
  city,
  experienceTime,
}) {
  return (
    <div className="jobOfferCardContainer">
      <div className="jobOfferCardContentTop">
        <img className="jobOfferCardImg" src={image} alt="logo" />
        <div className="jobOfferCardTitle">
          {" "}
          <h3 className="jobOfferCardNameCompany">{nameCompany}</h3>
          <h5 className="jobOfferCardTitle">{jobTitle}</h5>
        </div>
      </div>
      <div className="jobOfferCardContentMid">
        <div className="jobOfferCardLi">
          <ul className="JobOfferCardUl">
            <li>
              <span className="jobOfferCardCity">
                <FaMapMarkerAlt className="iconCards" /> {city}
              </span>
            </li>
            <li>
              <span className="jobOfferCardXp">
                <IoSchoolOutline className="iconCards" /> {experienceTime}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="jobOfferCardContentBot">
        <button type="button">
          <BsThreeDots />
        </button>
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
