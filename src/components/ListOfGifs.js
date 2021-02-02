import GifCard from "./GifCard";

import "../styles/ListOfGifs.scss";

export default function ListOfGifs({ gifs }) {
  console.log(gifs, "desde lista");
  if (gifs.length === 0) {
    return (
      <div className="no-list-container">
        Lo sentimos, no hemos encontrado resultados de búsqueda
      </div>
    );
  } else {
    return (
      <div className="list-container">
        {gifs.map((gif) => {
          const { id, title, url } = gif;
          return <GifCard key={id} imgUrl={url} title={title} id={id} />;
        })}
      </div>
    );
  }
}
