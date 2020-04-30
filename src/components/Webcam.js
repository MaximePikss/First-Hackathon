import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/webcam.css";

export default function Webcam() {
  const [windy, setWindy] = useState("");

  const country = "AU";

  const idArray = [
    "1170678944",
    "1170763622",
    "1107778991",
    "1148377596",
    "1169570532",
    "1169918615",
    "1170104891",
    "1189856505",
    "1200396958",
    "1129551152",
    "1182187198",
    "1203525950",
    "1234659870",
    "1247207747",
    "1196552050",
  ];

  function findRandomNumber() {
    let number = Math.floor(Math.random() * idArray.length + 0);
    return number;
  }

  let randomNumber = findRandomNumber();

  let destinationId = idArray[randomNumber];

  const url = `https://webcams.windy.com/webcams/public/embed/player/${destinationId}/day?autoplay=1`;

  useEffect(() => {
    getWindy();
  }, []);

  const getWindy = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${country}?key=XB2hPUk4tkDnV4Bs4HMHroBr83HawNUd`
      )
      .then((response) => response.data)
      .then((data) => {
        setWindy(data.result.webcams[0].id);
      });
  };

  return (
    <div>
      <iframe src={url} className="Webcam" title="cam" allow="autoplay" />
    </div>
  );
}
