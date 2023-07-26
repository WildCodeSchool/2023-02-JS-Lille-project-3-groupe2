import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";
import "../../Utils.scss";
import "./bookmark.scss";
import api from "../../services/api";

export default function Bookmark() {
  const [bookmark, setBookmark] = useState([]);

  const getBookmark = async () => {
    try {
      const result = await api.get("/candidate/1/bookmarks");
      setBookmark([result.data]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBookmark();
  }, []);
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
              <td>{item.bookmark_date}</td>
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
