import { useState } from "react";
import BookmarkAndCandidacy from "../../components/bookmarksandcandidacy/BookmarkAndCandidacy";
import CardSection from "../../components/cardsection/CardSection";
import ModifySection from "../../components/modifysection/ModifySection";
import ButtonModify from "../../components/buttonmodification/ButtonModify";
import "./ProfilePage.scss";

export default function ProfilePage() {
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
          <BookmarkAndCandidacy />
        </div>
      )}
    </div>
  );
}
