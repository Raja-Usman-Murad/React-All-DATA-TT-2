import React from 'react';
import Cards from './Cards'
import Sdata from './Sdata'

let AmazonSeries =()=>{
    return(
        <>
        <Cards 
        sname ={Sdata[1].sname}
        imgSrc={Sdata[1].imgSrc}
        cname ={Sdata[1].cname}
        link ={Sdata[1].link}
        />

<Cards 
        sname ={Sdata[3].sname}
        imgSrc={Sdata[3].imgSrc}
        cname ={Sdata[3].cname}
        link ={Sdata[3].link}
        />

        </>
    )
}
export default AmazonSeries;