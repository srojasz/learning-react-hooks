import { useState } from "react";
import Header from "./components/Header";
import fetchGifs from "./services/fetchGifs";
import ListOfGifs from "./components/ListOfGifs";
import InitialIdeas from "./components/InitialIdeas";

import "./App.scss";

function App() {
  const [gifs, setGifs] = useState([]);

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
        <ListOfGifs gifs={gifs} />
      )}
    </div>
  );
}

export default App;
