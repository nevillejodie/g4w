import React, {useState, useEffect} from 'react';
import css from "./beer.module.css"
import bleftarrow from "../../blackleftarrow.png";
import { Link } from "react-router-dom";

function Beer() {
    const [beer, setBeer] = useState([])

    useEffect(() => {
        async function getBeer() {
          try{
            const res = await fetch(`https://api.punkapi.com/v2/beers/random`) 
           
            const data = await res.json();
            
            setBeer(data[0]);
          }catch (err) {
          console.log(err)
        } 
        }
        getBeer()
      }, [])

      function refreshPage() {
        window.location.reload(false);
      }

  

console.log(beer)

return (
  <>
  {/* <Link to="/">
          <img src={bleftarrow} alt="back arrow" className={css.leftarrow} />
        </Link> */}
    <div className={css.body}>
    <h1 className={css.title}>{beer.name}</h1>
    <div className={css.tagline}> <q>{beer.tagline}</q></div>
    <p className={css.description}>{beer.description}</p>
    <p className={css.foodpairing}>This IPA goes well with: <div className={css.actualFood}>{beer && beer.food_pairing && (
beer.food_pairing.join(', ')
    )}</div>
    </p>

    
    {/* <p>Ingredients: {beer.ingredients && beer.ingredients.hops.name && (
        beer.indredients.hops.name.map()
    )}</p>  */}
<img className={css.pint} alt="a randomly generated beer" src={beer.image_url}></img>
<button className={css.beerButton} onClick={refreshPage}>I'll have another!</button>
</div>
</>
  )
}

export default Beer;


