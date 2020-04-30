import React from "react";

function Country({ webcams }) {
  const web = `https://webcams.windy.com/webcams/public/embed/player/1000550952/day`;
  return (
    <div className="container">
      {webcams.map((webcam) => {
        return { webcam };
      })}
      <h1>webcam</h1>
      <iframe src={web} width="600" height="600" />
    </div>
  );
}

export default Country;
