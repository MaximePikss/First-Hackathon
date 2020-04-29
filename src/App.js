
import React, { useState, useEffect } from "react";
import Countries from './components/Countries';
import axios from 'axios';
import Hero from "./components/Hero";
import "./components/styles/hero.css";
import "./App.css";

function App() {

  const [ countries, setCountries ] = useState([]);
  const [ webcam, setWebcam ] = useState([]);

  
  // Declared 2 const : one the the ID and the other for the country
  const destinationId = countries.id
  const country = "AU"
  // Then we get the url for the iframe with the third const 
  //const url = `https://webcams.windy.com/webcams/public/embed/player/${destinationId}/day`
  

  // in the useEffect, we get the cam's ID to use in the URL
  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios
      .get(
        "https://api.windy.com/api/webcams/v2/list?show=countries&key=XB2hPUk4tkDnV4Bs4HMHroBr83HawNUd"
      )
      .then((response) => response.data)
      .then((data) => {
        setCountries(data.result.countries);
        
        
    });
  }

  const getWebcam = () =>{
    axios
      .get(
        "https://api.windy.com/api/webcams/v2/list?show=webcams:image,location,player&key=XB2hPUk4tkDnV4Bs4HMHroBr83HawNUd"
      )
      .then((response) => response.data)
      .then((data) => {
        setWebcam(data.webcams[0].id);
        
        
  });
  }
  
  return (

    <div>

      <h1>titre</h1>
      
      
     <Countries countries={countries} webcam={webcam} />


    </div>

    <>
      <Hero />
    </>
  );
}

export default App;
