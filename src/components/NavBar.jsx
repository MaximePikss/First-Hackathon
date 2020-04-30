import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import Webcam from "./Webcam";
import Popup from "reactjs-popup";
import PopupContent from "./PopupContent";
import "./styles/popup.css";

export default function NavBar() {
  return (
    <div className="buttonclass">
      <label>Random destination!</label>
      <Link to="/">
        <button className="button" onClick="Webcam" title="Random!"></button>
      </Link>
      <label>Your guest</label>
      <Popup
        modal
        trigger={<button title="YourGuest" className="button"></button>}
      >
        {(close) => <PopupContent close={close} />}
      </Popup>
    </div>
  );
}
