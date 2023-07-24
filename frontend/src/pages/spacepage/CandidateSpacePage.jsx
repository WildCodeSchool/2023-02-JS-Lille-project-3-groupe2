import { useState } from "react";
import ButtonModify from "../../components/buttonmodification/ButtonModify";
import CardSection from "../../components/cardsection/CardSection";
import ModifySection from "../../components/modifysection/ModifySection";
import "./CandidateSpacePage.scss";

export default function CandidateSpacePage() {
  const [showModifySection, setShowModifySection] = useState(false);

  const handleModifyButtonClick = () => {
    setShowModifySection(true);
  };

  const handleBackButtonClick = () => {
    setShowModifySection(false);
  };

  return (
    <div className="CandidateSpacePageContainer">
      {showModifySection ? (
        <ModifySection onBackButtonClick={handleBackButtonClick} />
      ) : (
        <div>
          <CardSection />
          <ButtonModify onClick={handleModifyButtonClick} />
        </div>
      )}
    </div>
  );
}
