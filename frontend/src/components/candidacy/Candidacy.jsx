import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import api from "../../services/api";
import "../../Utils.scss";
import "./Candidacy.scss";
import { useAuth } from "../../contexts/AuthContext";

export default function Candidacy() {
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

  const [candidacy, setCandidacy] = useState([]);
  const { user } = useAuth();

  const getCandidacy = async () => {
    try {
      const result = await api.get(`/candidate/${user.userInfos.ID}/candidacy`);
      setCandidacy(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCandidacy();
  }, [user]);

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
              <td>{formatMySQLDateToInputFormat(item.application_date)}</td>
              <td>{item.status}</td>

              <td>
                <button
                  type="button"
                  onClick={() => handleViewDetails(item.candidacyId)}
                >
                  <AiFillEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
