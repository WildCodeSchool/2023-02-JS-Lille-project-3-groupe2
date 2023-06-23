import React from "react";
import automotiveCells from "../../assets/automotiveCells.png";
import iadvize from "../../assets/iadvize.png";
import iris from "../../assets/iris.png";
import maincair from "../../assets/maincair.png";
import ikks from "../../assets/ikks.png";
import lengow from "../../assets/lengow.png";
import manitou from "../../assets/manitou.png";
import maisondumonde from "../../assets/maisondumonde.png";
import klaxoon from "../../assets/klaxoon.png";
import groupama from "../../assets/groupama.png";
import lumiplan from "../../assets/lumiplan.png";
import "./SliderAutomatic.scss";

export default function SliderAutomatic() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={iadvize} alt="logo-iadvize" />
        </div>
        <div className="slide">
          <img src={automotiveCells} alt="" />
        </div>
        <div className="slide">
          <img src={ikks} alt="" />
        </div>
        <div className="slide">
          <img src={iris} alt="" />
        </div>
        <div className="slide">
          <img src={lengow} alt="" />
        </div>
        <div className="slide">
          <img src={maincair} alt="" />
        </div>
        <div className="slide">
          <img src={manitou} alt="" />
        </div>
        <div className="slide">
          <img src={maisondumonde} alt="" />
        </div>
        <div className="slide">
          <img src={klaxoon} alt="" />
        </div>
        <div className="slide">
          <img src={groupama} alt="" />
        </div>
        <div className="slide">
          <img src={lumiplan} alt="" />
        </div>
      </div>
    </div>
  );
}
