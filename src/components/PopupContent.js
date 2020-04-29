import React, { Component } from "react";
import "./styles/popup.css";

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Welcome !! </div>
    <div className="content">
      {" "}
      Hi traveler! Here is my home sweet home and secondarily my spaceship. As
      my guest, you can choose our next destination. But only on Earth. Sorry
      little human, you can go anywhere than your blue planet. (otherwise you
      die)
      <br />
      With these two buttons (on bottom), you can pick a destination. You can
      choose a country or just let the random makes you a surprise :)
    </div>
  </div>
);
