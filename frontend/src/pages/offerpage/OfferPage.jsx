import JobOffer from "../../components/joboffer/JobOffer";
import SelectOrderOffer from "../../components/selectorderoffer/SelectOrderOffer";
import "./OfferPage.scss";

export default function OfferPage() {
  window.scrollTo(0, 0);
  return (
    <div className="defaultOfferPage">
      <div className="searchAndOrder">
        {" "}
        <SelectOrderOffer />
      </div>
      {/* Need a page for description OFfer */}
      <JobOffer />
    </div>
  );
}
