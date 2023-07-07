import CorporateValues from "../../components/corporateValues/CorporateValues";

import SliderAutomatic from "../../components/sliderAutomatic/SliderAutomatic";
import Video from "../../components/video-yt/Video-yt";
import "./DefaultHome.scss";

import Teaser from "../../components/teaser-text/Teaser";

export default function DefaultHome() {
  return (
    <div className="defaultHomeBody">
      <Teaser />
      <CorporateValues />
      <Video />
      <SliderAutomatic />
    </div>
  );
}
