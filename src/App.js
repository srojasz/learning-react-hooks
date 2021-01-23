import "./App.css";
import getImages from "./services/getImages";
import { useState } from "react";

function App() {
  const [gifs, setGifs] = useState([]);
  const keyword = "poker";

  const apiKey = "oHaXvTbitKxXjIh3JxwJLoNZ4tYRsXCb";
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response;
      const id = data.map((image) => image.id);
      const gifs = data.map((image) => image.embed_url);
      setGifs(gifs);
    });
  return (
    <div>
      {gifs.map((gif, id) => {
        console.log(gif);
        return (
          <section>
            <h2>Soy un gif</h2>
            <img src="{gif}"></img>
          </section>
        );
      })}
    </div>
  );
}

export default App;
