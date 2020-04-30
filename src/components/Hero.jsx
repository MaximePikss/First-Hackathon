import React from "react";
import "./styles/hero.css";
//import Button from "./Bouton";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero" src="/images/background-01.png" alt="spaceship" />
      <div className="buttonclass">
        <button className="button" onClick="" title="Random!"></button>
        <button
          className="button"
          onClick=""
          title="Choose your destination"
        ></button>
      </div>
    </div>
  );
}
