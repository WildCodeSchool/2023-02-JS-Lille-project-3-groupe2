import ProfilCard from "../cardprofil/ProfilCard";
import InformationCard from "../informationcard/InformationCard";
import "./CardSection.scss";

export default function CardSection() {
  return (
    <div className="card-section-profil">
      <ProfilCard />
      <InformationCard />
    </div>
  );
}
