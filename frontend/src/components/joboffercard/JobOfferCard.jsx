import React from "react";
import "../../Utils.scss";

import Proptypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./JobOfferCard.scss";

export default function JobOfferCard({
  image,
  nameCompany,
  jobTitle,
  city,
  date,
}) {
  const formatMySQLDateToInputFormat = (mysqlDate) => {
    // Assuming the MySQL date is in the format "yyyy-mm-ddTHH:mm:ss.sssZ"
    // Convert it to "yyyy-mm-dd HH:mm:ss" for the input element
    const dateObject = new Date(mysqlDate);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    const seconds = String(dateObject.getSeconds()).padStart(2, "0");
    return `Le ${day}/${month}/${year} à ${hours}:${minutes}:${seconds}`;
  };

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
          <span className="jobOfferCardCity">
            <FaMapMarkerAlt className="iconCards" /> {city}
          </span>

          <span className="jobOfferCardXp">
            <span>{formatMySQLDateToInputFormat(date)}</span>
          </span>
        </div>
      </div>
      <div className="jobOfferCardContentBot" />
    </div>
  );
}

JobOfferCard.propTypes = {
  image: Proptypes.string.isRequired,
  nameCompany: Proptypes.string.isRequired,
  jobTitle: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
};
