import "../styles/Finder.scss";

export default function Finder({ setGifKeyword }) {
  function setGifsbyValue(ev) {
    const keyword = ev.target.value;
    setGifKeyword(keyword);
  }

  return (
    <form className="finder">
      <input
        className="finder__input"
        onChange={setGifsbyValue}
        type="text"
        placeholder="Find your gif"
      />
    </form>
  );
}
