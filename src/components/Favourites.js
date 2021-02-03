import GifCard from "./GifCard";

export default function Favourites({ favourites }) {
  return (
    <div className="favourites-container">
      <h2>Tus gifs favoritos</h2>
      <GifCard key={favourites} />
    </div>
  );
}