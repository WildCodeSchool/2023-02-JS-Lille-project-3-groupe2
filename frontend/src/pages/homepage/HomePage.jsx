import SliderAutomatic from "../../components/sliderautomatic/SliderAutomatic";
import "./HomePage.scss";
import CorporateValues from "../../components/corporateValues/CorporateValues";

import Teaser from "../../components/teaser/Teaser";

import VideoYt from "../../components/videoyt/VideoYt";

export default function HomePage() {
  window.scrollTo(0, 0);
  return (
    <div
      className="defaultHomeBody {
"
    >
      <Teaser />
      <CorporateValues />
      <VideoYt />
      <SliderAutomatic />
    </div>
  );
}
