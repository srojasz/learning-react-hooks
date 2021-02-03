import "../styles/GifCard.scss";

export default function GifCard({
  id,
  title,
  imgUrl,
  addFav,
  deleteFav,
  favourites,
}) {
  const isFavourite = favourites.find((favourite) => favourite === id)
    ? true
    : false;

  //Favs items.
  const favClass = isFavourite ? "card-container fav" : "card-container";
  const buttonText = isFavourite
    ? "Not favourite anymore?"
    : "Am I your favourite?";
  const heartIcon = isFavourite ? "💔" : "❤";

  function handleFav(ev) {
    ev.preventDefault();
    const gifId = ev.target.id;
    if (!isFavourite) {
      addFav(gifId);
    } else {
      deleteFav(gifId);
    }
  }
  return (
    <div className={favClass}>
      <img className="card-container__img" alt={title} src={imgUrl}></img>
      <p className="card-container__title">{title}</p>
      <button id={id} className="card-container__button" onClick={handleFav}>
        {buttonText}
        <span className="card-container__button--heart"> {heartIcon} </span>
      </button>
    </div>
  );
}
