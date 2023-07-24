/* import React, { useState } from "react"; */
import "../../Utils.scss";
import "./Candidacy.scss";
import { useEffect, useState } from "react";
import api from "../../services/api";
import CandidacyCard from "../candidacyCard/CandidacyCard";

/* const candidacyArray = [
  {
    social_denomination: "Lyreco",
    application_date: "12/12/23",
    status: "en cours",
  },
  {
    social_denomination: "Capgeminy",
    application_date: "01/01/23",
    status: "refusé",
  },
  {
    social_denomination: "goweb",
    application_date: "01/01/23",
    status: "refusé",
  },
  {
    social_denomination: "adeo",
    application_date: "01/01/23",
    status: "accepté",
  },
]; */

export default function Candidacy() {
  const [candidacy, setCandidacy] = useState([]);
  const getCandidacy = async () => {
    try {
      const result = await api.get("/candidacy/candidate/:id");
      setCandidacy(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCandidacy();
  }, []);

  return (
    <div className="candidacyGlobalContainer">
      <div className="candidacyTitleContainer">
        <h1 className="candidacyMainTitle">Mes Candidatures</h1>
      </div>
      <div className="candidacyMapContainer">
        {candidacy.map((item) => (
          <CandidacyCard
            key={item.application_date}
            socialDenomination={item.social_denomination}
            applicationDate={item.application_date}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}
