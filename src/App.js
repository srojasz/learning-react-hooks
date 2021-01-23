import "./App.css";
import { useState, Fragment, useEffect } from "react";
import fetchGifs from "./fetchGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    //   getImages().then(gifs => setGifs(gifs));
   fetchGifs("panda").then(setGifs);
      
})

  return (
      <Fragment>
          <div className="app-container">
              <h2>Buscador de gifs</h2>
              {
                  gifs.map(image => {
                      return <img src={image}></img>
                  })
              }
          </div>
      </Fragment>
  )
  
}  

export default App;
