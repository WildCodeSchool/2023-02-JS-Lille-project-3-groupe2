import React from "react";
import "./RegistrationCandidatePage.scss";

function RegistrationCandidatepage() {
  return (
    <div className="container-global-inscription-candidat">
      <h1 className="title-inscription-candidat">Inscris-toi</h1>

      <form className="container-form-inscription-candidat">
        <span>À propos de vous :</span>
        <div className="a-propos-candidat">
          <div className="input-a-propos">
            <input type="text" placeholder="Nom: Doe..." />
            <input type="text" placeholder="Prénom: John..." />
            <input type="text" placeholder="Date de naissance: 12/06/2000..." />
          </div>
        </div>
        <div className="container-global-adresse">
          <span>Votre adresse postale :</span>
          <div className="container-adresse">
            <input type="text" placeholder="N° de voirie: 8 Bis.." />
            <input
              type="text"
              placeholder="Type de voirie: Boulevard, Rue..."
            />
            <input type="text" placeholder="Nom de voirie: Saint Emilien..." />
            <input type="text" placeholder="Ville: Lille..." />
            <input type="text" placeholder="Code postal: 59000..." />
            <input type="text" placeholder="Département: Haut-de-France..." />
          </div>
        </div>

        <div className="">
          <span>Identifiants :</span>
          <div className="identifiant-input-candidat">
            <input type="text" placeholder="Email: doejohn@gmail.com..." />
            <input type="password" placeholder="Mot de passe:*******..." />
          </div>
        </div>
        <span>Quel(s) type(s) de contrat recherchez-vous ?</span>

        <div className="container-contract">
          <div className="container-grid-contract">
            <div className="input-contract">
              <input type="checkbox" id="cdi" />
              <label htmlFor="cdi">CDI</label>
            </div>
            <div className="input-contract">
              <input type="checkbox" id="stage" />
              <label htmlFor="stage">STAGE</label>
            </div>

            <div className="input-contract">
              <input type="checkbox" id="interim" />
              <label htmlFor="interim">INTÉRIM</label>
            </div>
            <div className="input-contract">
              <input type="checkbox" id="cdd" />
              <label htmlFor="cdd">CDD</label>
            </div>

            <div className="input-contract">
              <input type="checkbox" id="alternance" />
              <label htmlFor="alternance">ALTERNANCE</label>
            </div>
            <div className="input-contract">
              <input type="checkbox" id="autre" />
              <label htmlFor="autre">AUTRE</label>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="checkbox-input-rgpd">
            <input type="checkbox" />

            <label htmlFor="rgpd">
              En soumettant ce formulaire, vous consentez à ce que vos données
              personnelles soient traitées conformément au Règlement général sur
              la protection des données (RGPD). Vos informations seront
              utilisées dans le but de traiter votre candidature à des offres
              d'emploi et faciliter le processus de recrutement. Veuillez
              consulter notre politique de confidentialité pour plus
              d'informations sur la manière dont nous protégeons et utilisons
              vos données.
            </label>
          </div>
        </div>
        <div className="btn-inscription-global">
          <button type="submit" className="btn-inscription">
            VALIDER
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationCandidatepage;
