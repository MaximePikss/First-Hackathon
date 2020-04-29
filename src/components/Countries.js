import React from 'react';


function Countries() {

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



//const countryList = getCountries()


// NOTE : j'ai testé un loop car j'arrive pas à map. Au final ça ne donne rien... Je vous laisse faire la suite...
/*
const listFullCountry = [] 

for (let i=0; i >=countries.length; i++) {
    countries[0][1] = listFullCountry[i].push();
}

console.log(listFullCountry)
*/
return(
    <div>
     
{
    countries.map(country => {
        return(
            <ul>
            <li>{country[1]}</li>
            </ul>
        ) 
    })
}

    </div>
)

}

export default Countries