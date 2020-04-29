import React from 'react';
import './styles/countries.css';

function Countries({countries, webcam}) {

const web = `https://webcams.windy.com/webcams/public/embed/player/1000550952/day`
return(
    <div className="container">
    {
    countries.map(country => {
        return(
            <ul>
                <a href={web}>
                    <li>{country.name}</li>
                </a>
            </ul>
        ) 
    })
    }

    </div>
)

}

export default Countries;