import CorporateValues from "../../components/corporateValues/CorporateValues";

import SliderAutomatic from "../../components/sliderautomatic/SliderAutomatic";
import "./HomePage.scss";

import Teaser from "../../components/teaser/Teaser";

import JobOffer from "../../components/joboffer/JobOffer";
import ShowMoreBtn from "../../components/showmorebtn/ShowMoreBtn";
import VideoYt from "../../components/videoyt/VideoYt";

export default function HomePage() {
  window.scrollTo(0, 0);
  return (
    <div className="defaultHomeBody">
      <Teaser />
      <JobOffer />
      <ShowMoreBtn />
      <CorporateValues />
      <VideoYt />
      <SliderAutomatic />
    </div>
  );
}
