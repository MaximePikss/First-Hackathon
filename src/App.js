import React from "react";
import Hero from "./components/Hero";
import "./components/styles/hero.css";
import "./App.css";
import Popup from "reactjs-popup";
import PopupContent from "./components/PopupContent";

function App() {
  return (
    <>
      <Popup modal defaultOpen={true}>
        {(close) => <PopupContent close={close} />}
      </Popup>
      <Hero />
    </>
  );
}

export default App;
