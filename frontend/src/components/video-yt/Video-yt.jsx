import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "@react-hook/media-query";
import "./Video-yt.scss";

export default function Video() {
  const match = useMediaQuery("only screen and (min-width: 450px)");
  const externaticVideo =
    "https://www.youtube.com/watch?v=BYmNVsS5J58&ab_channel=Externatic-Cabinetderecrutementinformatique";

  if (match)
    return (
      <div className="video-player">
        <h1 className="title">
          À propos <span className="title-bold">de nous</span>
        </h1>
        <ReactPlayer url={externaticVideo} />
      </div>
    );
}
