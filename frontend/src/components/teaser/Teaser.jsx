import "./Teaser.scss";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import career from "../../assets/career.svg";
import api from "../../services/api";

export default function Teaser() {
  const [options, setOptions] = useState({ place: {}, type: {} });
  const navigate = useNavigate();
  const typeOptions = options.type;
  const placeOptions = options.place;

  const getOptions = async () => {
    try {
      const result = await api.get("/offer");
      const cityArray = result.data.map((item) => ({
        value: item.city,
        label: item.city,
      }));
      const regionArray = result.data.map((item) => ({
        value: item.region,
        label: item.region,
      }));
      const postalCodeArray = result.data.map((item) => ({
        value: item.postal_code,
        label: item.postal_code,
      }));
      const departmentArray = result.data.map((item) => ({
        value: item.department,
        label: item.department,
      }));
      const typeArray = result.data.map((item) => ({
        value: item.title,
        label: item.title,
      }));

      const placeSet = new Set(
        [
          ...cityArray,
          ...regionArray,
          ...postalCodeArray,
          ...departmentArray,
        ].map(JSON.stringify)
      );
      const uniquePlaceArray = Array.from(placeSet).map(JSON.parse);

      const unique = {
        place: uniquePlaceArray,
        type: [...new Set(typeArray)],
      };
      setOptions((prev) => ({
        ...prev,
        type: unique.type,
        place: unique.place,
      }));

      return options;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <div className="teaserContainer">
      <div className="teaserTopContainer">
        <div className="teaserLeft">
          <h1>
            <span>Externatic</span>{" "}
            <span>Bien plus qu’un cabinet de recrutement informatique </span>
          </h1>
          <p>
            Externatic est un cabinet de recrutement informatique qui répond aux
            vrais besoins de vraies personnes.
            <br /> Ici, chaque visage a un nom. Nos consultants ne sont pas des
            robots, il n’y a pas d’algorithmes, de profils ou de liens
            automatisés.
          </p>
          <div className="searchOffercontainer">
            <div className="selectOfferTop">
              {" "}
              <h2>Je recherche </h2>
              <Select
                options={typeOptions}
                isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Quoi ? Métier, entreprise..."
              />
            </div>

            <div className="selectOfferBot">
              {" "}
              <h2>à </h2>
              <Select
                options={placeOptions}
                isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Où ? Ville,département..."
              />
            </div>
            <div className="buttonOffer">
              <motion.button
                onClick={() => navigate("/offer")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Rechercher
                <BsSearch />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="teaserRight">
          <img src={career} alt="ok" />
        </div>
      </div>
    </div>
  );
}
