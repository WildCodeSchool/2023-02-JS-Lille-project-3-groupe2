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

  return (
    <div className="CandidateSpacePageContainer">
      {showModifySection ? (
        <ModifySection />
      ) : (
        <div>
          <CardSection />
          <ButtonModify onClick={handleModifyButtonClick} />
        </div>
      )}
    </div>
  );
}
