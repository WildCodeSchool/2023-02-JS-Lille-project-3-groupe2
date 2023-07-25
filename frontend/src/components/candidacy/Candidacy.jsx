import React, { useEffect, useState } from "react";
import "../../Utils.scss";
import "./Candidacy.scss";
import api from "../../services/api";

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

  const handleViewDetails = (candidacyId) => {
    // Do something when the button is clicked, e.g., show more details for the candidacy with the given ID.
    console.info(`View details for candidacy ID: ${candidacyId}`);
  };

  return (
    <div className="candidacyGlobalContainer">
      <div className="candidacyTitleContainer">
        <h1 className="candidacyMainTitle">Mes Candidatures</h1>
      </div>
      <table className="candidacyTable">
        {/* Added a table element */}
        <thead>
          <tr>
            <th>Entreprise</th>
            <th>Titre de l'offre</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th> {/* Added a new table header for actions */}
          </tr>
        </thead>
        <tbody>
          {candidacy.map((item) => (
            <tr key={item.application_date}>
              <td>{item.enterprise_title}</td>
              <td>{item.title}</td>
              <td>{item.application_date}</td>
              <td>{item.status}</td>

              <td>
                <button
                  type="button"
                  onClick={() => handleViewDetails(item.candidacyId)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
