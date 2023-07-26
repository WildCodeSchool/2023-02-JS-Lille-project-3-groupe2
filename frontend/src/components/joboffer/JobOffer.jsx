import React, { useEffect, useState } from "react";
import "../../Utils.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import JobOfferCard from "../joboffercard/JobOfferCard";
import "../showmorebtn/ShowMoreBtn.scss";
import api from "../../services/api";
import "./JobOffer.scss";

export default function JobOffer() {
  const [jobOffer, setJobOffer] = useState([]);
  const getJobOffer = async () => {
    try {
      const result = await api.get("/offer");
      setJobOffer(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();
  const showDetails = (id) => {
    navigate(`/offer/preview/${id}`);
  };

  useEffect(() => {
    getJobOffer();
  }, []);

  const calculateAverageSalary = (min, max) => (min + max) / 2;

  return (
    <div className="AjustJobOfferCardAndBtn">
      <h2>
        Des offres d'emploi <span>à votre image</span>
      </h2>
      <div className="JobOfferContainer">
        {jobOffer
          .slice() // Create a copy of the array to avoid modifying the original state
          .sort((a, b) => {
            const averageA = calculateAverageSalary(a.min_salary, a.max_salary);
            const averageB = calculateAverageSalary(b.min_salary, b.max_salary);
            return averageB - averageA;
          })
          .map((item) => (
            <motion.button
              key={item.ID}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => showDetails(item.ID)}
            >
              <JobOfferCard
                key={item.ID}
                offerId={item.ID}
                image={item.logo_url}
                nameCompany={item.trade_name
                  .toLowerCase()
                  .replace(/^\w/, (c) => c.toUpperCase())}
                jobTitle={item.title}
                city={item.city}
                salary={`${item.min_salary}€ - ${item.max_salary}€`}
                date={item.offer_date}
              />{" "}
            </motion.button>
          ))}
      </div>
    </div>
  );
}
