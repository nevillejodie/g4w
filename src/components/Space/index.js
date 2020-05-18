
import React, {useState, useEffect} from 'react';

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
      <div><h1>Astronomy Picture of the Day</h1>
      
<div>
   {space.explanation}
   <a href={space.url}>Click here to watch {space.title}</a>
</div>
</div>
    )
}

export default Space;
