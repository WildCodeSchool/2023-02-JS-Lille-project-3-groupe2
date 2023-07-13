import ProfilCard from "../../components/cardprofil/ProfilCard";

import InformationCard from "../../components/informationcard/InformationCard";
import "./CandidateSpacePage.scss";

export default function CandidateSpacePage() {
  return (
    <div className="CandidateSpacePageContainer">
      <ProfilCard />
      <InformationCard />
    </div>
  );
}
