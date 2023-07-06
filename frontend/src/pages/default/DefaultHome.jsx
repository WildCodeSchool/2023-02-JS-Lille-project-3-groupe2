import CorporateValues from "../../components/corporateValues/CorporateValues";

import SliderAutomatic from "../../components/sliderAutomatic/SliderAutomatic";
import Video from "../../components/video-yt/Video-yt";
import "./DefaultHome.scss";

export default function DefaultHome() {
  return (
    <div className="defaultHomeBody">
      <CorporateValues />
      <Video />
      <SliderAutomatic />
    </div>
  );
}
