import GifCard from "./GifCard";

import "../styles/ListOfGifs.scss";

export default function ListOfGifs({
  gifs,
  setGifs,
  addFav,
  deleteFav,
  favourites,
}) {
  function handleReset() {
    gifs = [];
    setGifs(gifs);
  }

  return (
    <div className="list">
      <button onClick={handleReset} className="button-close">
        Reset
      </button>
      <div className="list-container">
        {gifs.map((gif) => {
          const { id, title, url } = gif;
          return (
            <GifCard
              key={id}
              imgUrl={url}
              title={title}
              id={id}
              addFav={addFav}
              deleteFav={deleteFav}
              favourites={favourites}
            />
          );
        })}
      </div>
    </div>
  );
}
