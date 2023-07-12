import JobOffer from "../../components/joboffer/JobOffer";
import SelectOrderOffer from "../../components/selectorderoffer/SelectOrderOffer";
import Teaser from "../../components/teaser/Teaser";
import "./OfferPage.scss";

export default function OfferPage() {
  window.scrollTo(0, 0);
  return (
    <div className="defaultOfferPage">
      <div className="searchAndOrder">
        {" "}
        <Teaser image={false} />
        <SelectOrderOffer />
      </div>

      <JobOffer />
    </div>
  );
}
