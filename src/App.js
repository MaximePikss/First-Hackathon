import React, { useState, useEffect } from "react";
import Countries from './components/Countries';
import axios from 'axios';


function App() {


const [ windy, setWindy ] = useState("");


// Declared 2 const : one the the ID and the other for the country
const destinationId = windy
const country = "AU"
// Then we get the url for the iframe with the third const 
const url = `https://webcams.windy.com/webcams/public/embed/player/${destinationId}/day`



// in the useEffect, we get the cam's ID to use in the URL
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
}




  return (
    <div>

      <h1>titre</h1>

      <iframe src={url} title="cam"/>
      <Countries />


    </div>
  );
}

export default App;
