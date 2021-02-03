import { useState } from "react";
import Header from "./components/Header";
import fetchGifs from "./services/fetchGifs";
import ListOfGifs from "./components/ListOfGifs";
import InitialIdeas from "./components/InitialIdeas";

import "./App.scss";

function App() {
  const [gifs, setGifs] = useState([]);
  const [favourites, setFavourites] = useState([]);

  function addFav(gif) {
    setFavourites([...favourites, gif]);
  }

  function deleteFav(gif) {
    const index = favourites.indexOf(gif);
    favourites.splice(index, 1);
    setFavourites(favourites);
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
