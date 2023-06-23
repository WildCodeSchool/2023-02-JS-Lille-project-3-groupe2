import React from "react";
import { FiUsers, FiRefreshCw, FiTrendingUp } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import "./CorporateValues.scss";

export default function CorporateValues() {
  const match = useMediaQuery("only screen and (max-width: 450px)");

  if (match)
    return (
      <div className="container-values-mobile">
        <div className="image-text-mobile">
          <img
            className="img-values-mobile"
            src="./src/assets/proximite.jpg"
            alt="solidarity"
          />
          <div className="presentation-text-mobile">
            <div className="title-values-mobile">
              <h2>Notre proximité</h2>
              <FiUsers className="icon-react-mobile" />
            </div>
            <p>
              L’expérience professionnelle est une chose. L’expérience de vie en
              est une autre. Alors nos consultants prennent le temps de faire
              connaissance avec chaque personne, pour comprendre le contexte, le
              parcours, les envies et les projets.
            </p>
          </div>
        </div>

        <div className="image-text-mobile">
          <img
            className="img-values-mobile"
            src="./src/assets/performance.jpg"
            alt="woman's working"
          />
          <div className="presentation-text-mobile">
            <div className="title-values-mobile">
              <h2>Notre performance</h2>
              <FiTrendingUp className="icon-react-mobile" />
            </div>
            <p>
              Notre réseau est une force et nous y travaillons sans relâche.
              Notre expérience nous permet d’identifier les vrais besoins d’une
              entreprise et de ceux qui la rejoignent.
            </p>
          </div>
        </div>

        <div className="image-text-mobile">
          <img
            className="img-values-mobile"
            src="./src/assets/durable.jpg"
            alt="smile"
          />
          <div className="presentation-text-mobile">
            <div className="title-values-mobile">
              <h2>Notre durabilité</h2>
              <FiRefreshCw className="icon-react-mobile" />
            </div>
            <p>
              Notre challenge est de trouver l’équipe qui fonctionnera ensemble
              de manière professionnelle et personnelle, pour aller jusqu’au
              bout d’un projet commun. Notre responsabilité vis-à-vis des
              impacts de nos décisions et nos actions sur le long-terme
              correspondent également à notre politique RSE.
            </p>
          </div>
        </div>
      </div>
    );
  return (
    <div className="container-values-desktop">
      <div className="image-text-desktop">
        <img src="./src/assets/proximite.jpg" alt="solidarity" />
        <div className="presentation-text">
          <h2>Notre proximité</h2>
          <p>
            L’expérience professionnelle est une chose. L’expérience de vie en
            est une autre. Alors nos consultants prennent le temps de faire
            connaissance avec chaque personne, pour comprendre le contexte, le
            parcours, les envies et les projets.
          </p>
        </div>
      </div>

      <div className="image-text-desktop">
        <div className="presentation-text-desktop">
          <h2>Notre performance</h2>
          <p>
            Notre réseau est une force et nous y travaillons sans relâche. Notre
            expérience nous permet d’identifier les vrais besoins d’une
            entreprise et de ceux qui la rejoignent.
          </p>
        </div>
        <img src="./src/assets/performance.jpg" alt="woman's working" />
      </div>

      <div className="image-text-desktop">
        <img src="./src/assets/durable.jpg" alt="smile" />
        <div className="presentation-text-desktop">
          <h2>Notre durabilité</h2>
          <p>
            Notre challenge est de trouver l’équipe qui fonctionnera ensemble de
            manière professionnelle et personnelle, pour aller jusqu’au bout
            d’un projet commun. Notre responsabilité vis-à-vis des impacts de
            nos décisions et nos actions sur le long-terme correspondent
            également à notre politique RSE.
          </p>
        </div>
      </div>
    </div>
  );
}
