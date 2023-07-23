import React from "react";
import "../../Utils.scss";

import Proptypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function JobOfferCard({
  image,
  nameCompany,
  jobTitle,
  city,
  salary,
}) {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
              <IoSchoolOutline className="iconCards" /> {salary}
            </span>
          </div>
        </div>
        <div className="jobOfferCardContentBot" />
      </div>
    </motion.button>
  );
}

JobOfferCard.propTypes = {
  image: Proptypes.string.isRequired,
  nameCompany: Proptypes.string.isRequired,
  jobTitle: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  salary: Proptypes.string.isRequired,
};
