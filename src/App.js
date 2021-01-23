import "./App.css";
import getImages from "./services/getImages";
import { useState, Fragment, useEffect } from "react";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
      const apiKey = "oHaXvTbitKxXjIh3JxwJLoNZ4tYRsXCb";
      const keyword = 'morty';
      const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(responseData => {
            const {data} = responseData;
            const gifs = data.map((image) => image.images.original.url);
            setGifs(gifs);
    })})

  return (
      <Fragment>
          <div class="app-container">
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
