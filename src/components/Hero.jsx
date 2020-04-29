import React from "react";
import "./styles/hero.css";
//import Button from "./Bouton";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero" src="/images/background-01.png" alt="spaceship" />
      <div className="buttonclass">
        <div className="btn">
          <button className="button" onClick=""></button>
          <label>Random!</label>
        </div>
        <div className="btn">
          <button className="button" onClick=""></button>
          <label>Choose your destination</label>
        </div>
      </div>
    </div>
  );
}
