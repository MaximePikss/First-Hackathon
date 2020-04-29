import React from 'react';
import './styles/countries.css';

function Countries({countries, webcam}) {
/*
const countries =  [
    ['BE', 'Belgium'],
    ['FR', 'France'],
    ['CA', 'Canada'],
    ['DE', 'Germany'],
    ['AU', 'Australie'],
    ['AR', 'Argentine'],
    ['BR', 'Brasil'],
    ['HK', 'Hong Kong'],
    ['IE', 'Ireland'],
    ['IS', 'Iceland'],
    ['JP', 'Japan'],
    ['ZM', 'South Africa'],
];
*/


//const countryList = getCountries()


// NOTE : j'ai testé un loop car j'arrive pas à map. Au final ça ne donne rien... Je vous laisse faire la suite...
/*
const listFullCountry = [] 

for (let i=0; i >=countries.length; i++) {
    countries[0][1] = listFullCountry[i].push();
}

console.log(listFullCountry)
*/

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