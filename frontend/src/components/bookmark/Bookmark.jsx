import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";
import "../../Utils.scss";
import "./bookmark.scss";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

export default function Bookmark() {
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

  const [bookmark, setBookmark] = useState([]);
  const { user } = useAuth();
  const getBookmark = async () => {
    try {
      const result = await api.get(`/candidate/${user.userInfos.ID}/bookmarks`);
      setBookmark(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBookmark();
  }, [user]);

  const handleViewDetails = (candidacyId) => {
    // Do something when the button is clicked, e.g., show more details for the candidacy with the given ID.
    console.info(`View details for candidacy ID: ${candidacyId}`);
  };

  return (
    <div className="bookmarkGlobalContainer">
      <div className="bookmarkTitleContainer">
        <h1 className="bookmarkCardMainTitle">Mes Favoris</h1>
      </div>
      <table className="bookmarkTable">
        {" "}
        {/* Added a table element */}
        <thead>
          <tr>
            <th>Entreprise</th>
            <th>Titre de l'offre</th>
            <th>Date de Favoris</th>
            <th>Actions</th> {/* Added a new table header for actions */}
          </tr>
        </thead>
        <tbody>
          {bookmark.map((item) => (
            <tr key={item.bookmark_date}>
              <td>{item.enterprise_title}</td>
              <td>{item.offer_title}</td>
              <td>{formatMySQLDateToInputFormat(item.bookmark_date)}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleViewDetails(item.bookmark)}
                >
                  <AiFillEye />
                </button>
                <button type="button">
                  <RiDeleteBinFill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
