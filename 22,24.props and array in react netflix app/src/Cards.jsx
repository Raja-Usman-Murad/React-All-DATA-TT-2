import react from 'react';

function Cards(props) {
    return(
        <>
        
<div className="Cards">
      <div className="card">
         <img src={props.imgSrc} alt="vikings"/>
        
        <div className="cardinfo">
          <h3>{props.sname}</h3>
          <h1>{props.cname}</h1>
          <a href={props.link} target="blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>

</div>
</>
    )
}
export default Cards;