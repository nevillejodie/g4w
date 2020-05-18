import React, {useState, useEffect} from 'react';
import "./beer.css"


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
    <div>
    <h1>{beer.name}</h1>
    <q>{beer.tagline}</q>
    <p>{beer.description}</p>
    <p>This IPA goes well with {beer && beer.food_pairing && (
beer.food_pairing.join(', ')
    )}
    </p>

    
    {/* <p>Ingredients: {beer.ingredients && beer.ingredients.hops.name && (
        beer.indredients.hops.name.map()
    )}</p>  */}

<img src={beer.image_url}></img>


<button className="beerButton" onClick={refreshPage}>I'll have another!!</button>
</div>
  )
}

export default Beer;


