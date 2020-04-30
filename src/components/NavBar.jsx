import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import Webcam from "./Webcam";

export default function NavBar() {
  return (
    <div className="buttonclass">
      <Link to="/list">
        <button className="button" onClick="Webcam" title="Random!"></button>
      </Link>
      <label>Random destination!</label>
    </div>
  );
}
