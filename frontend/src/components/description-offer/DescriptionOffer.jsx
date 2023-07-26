import { useEffect, useState } from "react";
import "./DescriptionOffer.scss";
import { FiMapPin } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import api from "../../services/api";

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

  const getJobOffer = async () => {
    try {
      const result = await api.get(`/offer/${id}`);
      setJobDescription(result.data);
    } catch (error) {
      console.error(error);
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
              <IoSchoolOutline />
            </span>{" "}
            {jobDescription.min_salary}€ - {jobDescription.max_salary}€{" "}
          </h3>
        </div>
        <div className="img-offer-page">
          <img src={jobDescription.logo_url} alt="" />
        </div>
      </div>
      <div className="description-offer-page">
        <h2>Description du poste :</h2>

        <p>{jobDescription.other_information}</p>
        <br />
        <p>{jobDescription.descriptions}</p>
        <br />
        <span>{formatMySQLDateToInputFormat(jobDescription.offer_date)}</span>
      </div>
    </div>
  );
}
