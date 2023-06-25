import React, { useEffect, useState } from "react";
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
import akeneo from "../../assets/akeneo.png";
import allovoisin from "../../assets/allovoisin.png";
import lucca from "../../assets/lucca.png";
import nickel from "../../assets/nickel.png";
import showroomprive from "../../assets/showroomprive.png";
import "./SliderAutomatic.scss";

function SliderAutomatic() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const logos = [
    lucca,
    akeneo,
    allovoisin,
    nickel,
    iris,
    maisondumonde,
    showroomprive,
    manitou,
    iadvize,
    ikks,
    lengow,
    maincair,
    automotiveCells,
    klaxoon,
    groupama,
    lumiplan,
  ];
  const logosLoop = [...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % logos.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [logos.length]);
  return (
    <div className="slider">
      <div
        className="slide-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {logosLoop.map((logo, index) => (
          <div className={`slide ${index === currentSlide ? "active" : ""}`}>
            <img className="img-partner" src={logo} alt="logo-partner" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default React.memo(SliderAutomatic);
