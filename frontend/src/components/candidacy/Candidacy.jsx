/* import React, { useState } from "react"; */
import "../../Utils.scss";
import "./Candidacy.scss";
import { useEffect, useState } from "react";
import api from "../../services/api";
import CandidacyCard from "../candidacyCard/CandidacyCard";

export default function Candidacy() {
  const [candidacy, setCandidacy] = useState([]);
  const getCandidacy = async () => {
    try {
      const result = await api.get("/candidate/1/candidacy");
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
            socialDenomination={item.enterprise_title}
            applicationDate={item.application_date}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}
