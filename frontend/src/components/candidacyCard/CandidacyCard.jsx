import "../../Utils.scss";
import "./CandidacyCard.scss";
import Proptypes from "prop-types";

export default function CandidacyCard({
  socialDenomination,
  applicationDate,
  status,
  title,
}) {
  return (
    <div className="candidacyCardGlboalContainer">
      <h4 className="candidacyCardSecondTitle">{socialDenomination}</h4>
      <h4>{title}</h4>
      <h4 className="candidacyCardApplicationDate"> {applicationDate}</h4>
      <h4 className="candidacyCardStatus"> {status}</h4>
    </div>
  );
}

CandidacyCard.propTypes = {
  socialDenomination: Proptypes.string.isRequired,
  applicationDate: Proptypes.string.isRequired,
  status: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};
