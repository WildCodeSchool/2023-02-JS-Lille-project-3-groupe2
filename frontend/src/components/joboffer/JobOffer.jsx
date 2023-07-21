import React, { useEffect, useState } from "react";
import "../../Utils.scss";
import JobOfferCard from "../joboffercard/JobOfferCard";
import "./JobOffer.scss";
import "../showmorebtn/ShowMoreBtn.scss";
import api from "../../services/api";

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
            <JobOfferCard
              key={item.nameCompany}
              image={item.logo_url}
              nameCompany={item.trade_name
                .toLowerCase()
                .replace(/^\w/, (c) => c.toUpperCase())}
              jobTitle={item.title}
              city={item.city}
              salary={`${item.min_salary}€ - ${item.max_salary}€`}
              date={item.offer_date}
            />
          ))}
      </div>
    </div>
  );
}
