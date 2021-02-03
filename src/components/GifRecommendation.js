export default function GifRecommendation({ setGifKeyword, name }) {
  function setNewKeyword(ev) {
    const keyword = ev.target.id;
    setGifKeyword(keyword);
  }

  return (
    <div className="recommendation">
      <input
        onClick={setNewKeyword}
        id={name}
        type="radio"
        name="surprise-me"
      />
      <label htmlFor={name}>{name + " mood"}</label>
    </div>
  );
}
