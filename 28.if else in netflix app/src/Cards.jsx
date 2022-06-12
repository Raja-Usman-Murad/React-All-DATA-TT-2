import React from 'react';

const Cards =(props)=>{
    return(
        <>
            <div className="card">
            <img src={props.imgSrc}/>
            <div className='cardinfo'>
                <h3>{props.sname}</h3>
                <h1>{props.cname}</h1>
                <a href={props.link}>
                    <button>Watch Now</button>
                </a>
            </div>

            </div>
        </>
    )
}
export default Cards;