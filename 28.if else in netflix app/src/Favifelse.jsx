import React from 'react';
import NetflixSeries from './NetflixSeries';
import AmazonSeries from './AmazonSeries';


const favs="netflix";
let Fav = ()=>{
    if(favs==="netflix"){
        return(
            <NetflixSeries />
        )

    }else{
        return <AmazonSeries />;
    }
}
export default Fav;