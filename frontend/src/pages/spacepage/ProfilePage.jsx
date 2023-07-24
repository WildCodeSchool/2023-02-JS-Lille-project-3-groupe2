import ProfilCard from "../../components/cardprofil/ProfilCard";

import InformationCard from "../../components/informationcard/InformationCard";
import ModifySection from "../../components/modifysection/ModifySection";
import "./ProfilePage.scss";

export default function ProfilePage() {
  return (
    <div className="CandidateSpacePageContainer">
      <ProfilCard />
      <InformationCard />
      <ModifySection />
    </div>
  );
}
