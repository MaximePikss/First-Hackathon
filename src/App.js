import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {


const [ windy, setWindy ] = useState("");

const destinationId = windy
const country = "AU"
const url = `https://webcams.windy.com/webcams/public/embed/player/${destinationId}/day`


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


    </div>
  );
}

export default App;
