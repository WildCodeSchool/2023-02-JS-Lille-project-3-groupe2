import "../../Utils.scss";
import "./CandidacyCard.scss";
import Proptypes from "prop-types";

export default function CandidacyCard({
  socialDenomination,
  applicationDate,
  status,
}) {
  return (
    <div className="candidacyCardGlboalContainer">
      <h4 className="candidacyCardSecondTitle">
        Entreprise : {socialDenomination}
      </h4>
      <h4 className="candidacyCardApplicationDate">
        {" "}
        Date de candidature : {applicationDate}
      </h4>
      <h4 className="candidacyCardStatus">
        {" "}
        Status de la candidature : {status}
      </h4>
    </div>
  );
}

CandidacyCard.propTypes = {
  socialDenomination: Proptypes.string.isRequired,
  applicationDate: Proptypes.string.isRequired,
  status: Proptypes.string.isRequired,
};
