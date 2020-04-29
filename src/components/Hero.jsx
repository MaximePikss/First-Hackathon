import React from "react";
import { Link } from "react-router-dom";
import "./styles/hero.css";
import Button from "./Bouton";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero" src="/images/background-01.png" alt="spaceship" />
      <Link to="/list">
        <Button />
      </Link>
    </div>
  );
}
