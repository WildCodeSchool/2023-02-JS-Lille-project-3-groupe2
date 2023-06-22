import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "@react-hook/media-query";

export default function Video() {
  const match = useMediaQuery("only screen and (min-width: 450px)");
  const externaticVideo =
    "https://www.youtube.com/watch?v=BYmNVsS5J58&ab_channel=Externatic-Cabinetderecrutementinformatique";

  if (match)
    return (
      <div className="video-player">
        <ReactPlayer url={externaticVideo} />
      </div>
    );
}
