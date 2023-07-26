import { useEffect, useState } from "react";
import "./DescriptionOffer.scss";
import { FiMapPin } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import ApplyButton from "../applybutton/ApplyButton";

export default function DescriptionOffer() {
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

  const { id } = useParams();
  const [jobDescription, setJobDescription] = useState("");
  const { user, isLogin } = useAuth();
  const getJobOffer = async () => {
    try {
      const result = await api.get(`/offer/${id}`);
      setJobDescription(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  const addFavorite = async () => {
    try {
      await api.post(`/candidate/bookmarks`, {
        candidate_ID: user.userInfos.ID,
        offer_ID: id,
        enterprise_ID: jobDescription.enterprise_ID,
      });
      Swal.fire("", "Tu as ajouté cette annonce aux favoris.", "success");
    } catch (error) {
      if (error.response.status) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tu as déjà ajouté cette annonce aux favoris !",
        });
      }
    }
  };

  useEffect(() => {
    getJobOffer();
  }, []);
  return (
    <div className="container-offer-page">
      <div className="header-offer-page">
        <div className="title-head-offer">
          <h1>
            {jobDescription.title} chez {jobDescription.social_denomination}
          </h1>
          <h3>
            <span>
              <FiMapPin />
            </span>{" "}
            Situé à {jobDescription.city}
          </h3>
          <h3>
            <span>
              <BiDollar />
            </span>{" "}
            {jobDescription.min_salary}€ - {jobDescription.max_salary}€{" "}
          </h3>
        </div>
        <div className="img-offer-page">
          <img src={jobDescription.logo_url} alt="" />
        </div>
        {isLogin && (
          <motion.button
            style={{ border: "none", height: "10%", background: "transparent" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addFavorite()}
          >
            <FaRegHeart />
          </motion.button>
        )}
      </div>
      <div className="description-offer-page">
        <h2>Description du poste :</h2>
        <p>{jobDescription.other_information}</p>
        <br />
        <p>{jobDescription.descriptions}</p>
        <br />
        <span>{formatMySQLDateToInputFormat(jobDescription.offer_date)}</span>
        <ApplyButton offerID={id} />
      </div>
    </div>
  );
}
