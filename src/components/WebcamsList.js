import React, { useState, useEffect } from "react";
import axios from 'axios';



// Note: j'ai testé de sortir les "title" de l'API mais je n'y arrive pas... 
// je vous laisse ce que j'ai fait, à vous de voir !



function WebcamsList() {

const [ webcamList, setwebcamList ] = useState([]);

const country = "AU"

    

useEffect(() => {
    getwebcamList();
  }, []);


  const getwebcamList = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=AU?key=XB2hPUk4tkDnV4Bs4HMHroBr83HawNUd`
      )
      .then((response) => response.data)
      .then((data) => {
        setwebcamList(data.result.webcams);


      
    });


  }





  console.log("------")
  console.log(test)
  console.log("------")




return(
    <div>
    ${webcamList[1].title}


    </div>
)

}

export default WebcamsList