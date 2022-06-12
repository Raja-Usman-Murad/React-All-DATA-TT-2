import React from 'react';
import Cards from './Cards'
import Sdata from './Sdata'

let NetflixSeries =()=>{
    return(
        <>
        <Cards 
        sname ={Sdata[0].sname}
        imgSrc={Sdata[0].imgSrc}
        cname ={Sdata[0].cname}
        link ={Sdata[0].link}
        />

<Cards 
        sname ={Sdata[2].sname}
        imgSrc={Sdata[2].imgSrc}
        cname ={Sdata[2].cname}
        link ={Sdata[2].link}
        />

<Cards 
        sname ={Sdata[4].sname}
        imgSrc={Sdata[4].imgSrc}
        cname ={Sdata[4].cname}
        link ={Sdata[4].link}
        />
        </>
    )
}
export default NetflixSeries;