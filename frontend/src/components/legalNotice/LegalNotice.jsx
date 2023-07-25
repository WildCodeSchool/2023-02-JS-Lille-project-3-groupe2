import React from "react";
import "./LegalNotice.scss";

function LegalNotice() {
  return (
    <div className="container-global-legal-notice">
      <div className="container-legal-notice">
        <h1>Mentions légales</h1>
        <p>
          Ce site est la propriété de : <br />
          <br /> <strong>EXTERNATIC</strong> <br />
          <br />1 Rue Racine
          <br /> 44000 NANTES
        </p>
        <p>SIREN : 800 426 629</p>

        <p>
          <strong>Conception et réalisation du site</strong> <br />
          <br />
          <span>Wild Code School</span>
          <br />
          <br />
          École de formations numériques
          <br />
          177 rue des Templiers – 59000 Lille
        </p>
        <p>
          <strong>Hébergement :</strong> <br />
          <br /> OVH SAS <br />2 rue Kellermann – 59100 Roubaix – France
        </p>
      </div>
    </div>
  );
}

export default LegalNotice;
