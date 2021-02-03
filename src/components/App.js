import { useEffect, useState } from "react";
import Header from "./Header";
import fetchGifs from "../services/fetchGifs";
import ListOfGifs from "./ListOfGifs";
import InitialIdeas from "./InitialIdeas";

import "../styles/App.scss";

function App() {
  const [gifs, setGifs] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [keyword, setKeyword] = useState([""]);

  useEffect(() => {
    if (keyword !== "") {
      fetchGifs(keyword).then(setGifs);
    }
  }, [keyword]);

  // Functions.
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
    setKeyword(keyword);
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
