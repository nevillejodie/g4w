import React, {useState, useEffect} from 'react';
import css from "./space.module.css"
import leftarrow from "../../leftarrow.png";
import { Link } from "react-router-dom";

function Space() {

    const [space, setSpace] = useState([])
  
    useEffect(() => {
      async function getSpace() {
        try{
          const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=fKBrbEpQWeIh97aIQhlbZzjgNfKAqQXYgiFedw8l`) 
         
          const data = await res.json();
          
          setSpace(data);
        }catch (err) {
        console.log(err)
      } 
      }
      getSpace()
    }, [])


  console.log(space)

    return (
      <div className={css.body}>
      
<div>
<Link to="/">
          <img src={leftarrow} alt="back arrow" className={css.leftarrow} />
        </Link>
<h1 className={css.title}>{space.title}</h1>
<img src={space.url}></img>
   <p className={css.explanation}>{space.explanation}</p>
   
</div>
</div>
    )
}

export default Space;
