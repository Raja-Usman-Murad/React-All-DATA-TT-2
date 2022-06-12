import React from 'react';
// import Fav from './Favifelse';
import NetflixSeries from './NetflixSeries';
import AmazonSeries from './AmazonSeries';

const favs="netflix";



const App = ()=>{
    return(
        <>
        <h2 className='mainheading'>List OF 5 NetFlix Series</h2>

        {favs==="netflix" ? <NetflixSeries /> : <AmazonSeries />}

        </>
    )
}
    export default App;