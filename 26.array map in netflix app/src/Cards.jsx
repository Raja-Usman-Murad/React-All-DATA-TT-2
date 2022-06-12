import Images from './Images';

function Cards(props) {
    return(
        <>
        

      <div className="cardN">
      <Images imgSrc={props.imgSrc}/>
        <div className="cardinfoN">
          <h3 className='HN'>{props.sname}</h3>
          <h1 className='HN'>{props.cname}</h1>
          <a className='HN' href={props.link} target="blank">
            <button className='buttonN'>Watch Now</button>
          </a>
        </div>
      </div>


</>
    )
}
export default Cards;