import React from 'react';

function Country({ webcams}) {

    const web = `https://webcams.windy.com/webcams/public/embed/player/1000550952/day`
    return(
        <div className="container">
        {
        webcams.map(webcam => {
           
            
            
        })
        }
        <h1>webcam</h1>
        <iframe src={web} />
        </div>
    )
    


}

export default Country;