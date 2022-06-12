import Images from './Images';

function Cards(props) {
    return(
        <>
        

      <div className="card">
      <Images imgSrc={props.imgSrc}/>
        <div className="cardinfo">
          <h3>{props.sname}</h3>
          <h1>{props.cname}</h1>
          <a href={props.link} target="blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>


</>
    )
}
export default Cards;