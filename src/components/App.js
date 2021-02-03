import { useState } from "react";
import Header from "./Header";
import fetchGifs from "../services/fetchGifs";
import ListOfGifs from "./ListOfGifs";
import InitialIdeas from "./InitialIdeas";

import "../styles/App.scss";

function App() {
  const [gifs, setGifs] = useState([]);
  const [favourites, setFavourites] = useState([]);

  function addFav(gif) {
    setFavourites([...favourites, gif]);
  }

  function deleteFav(gif) {
    const index = favourites.indexOf(gif);
    const newFavs = [...favourites];
    newFavs.splice(index, 1);
    setFavourites(newFavs);
  }

  function setGifKeyword(keyword) {
    fetchGifs(keyword).then(setGifs);
  }

  return (
    <div className="app__container">
      <Header setGifKeyword={setGifKeyword} />

      {gifs.length === 0 ? (
        <div className="initial-ideas">
          <InitialIdeas setGifKeyword={setGifKeyword} />
        </div>
      ) : (
        <ListOfGifs
          gifs={gifs}
          setGifs={setGifs}
          addFav={addFav}
          deleteFav={deleteFav}
          favourites={favourites}
        />
      )}
    </div>
  );
}

export default App;