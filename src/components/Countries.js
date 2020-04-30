import React from 'react';
import './styles/countries.css';
import { Link } from "react-router-dom";

function Countries({countries}) {

const web = `https://webcams.windy.com/webcams/public/embed/player/1000550952/day`
return(
    <div className="container">
    {
    countries.map(country => {
        return(
            <ul>
                <Link to="/webcam">
                <a href={web}>
                    <li>{country.name}</li>
                </a>
                </Link>
            </ul>
        ) 
    })
    }
    <iframe src={web}/>
    </div>
)

}

export default Countries;