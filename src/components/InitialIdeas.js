import GifRecommendation from "./GifRecommendation";

export default function InitialIdeas({ setGifKeyword }) {
  const initialIdeasForUsers = ["pandas", "cats", "dogs"];
  return (
    <form>
      <div className="initial-ideas__options">
        <p className="initial-ideas__options--text">
          No ideas?
          <span>How about starting with these lovely animals?</span>
        </p>
        <div className="initial-ideas__options--recommendations">
          {initialIdeasForUsers.map((idea) => {
            return (
              <GifRecommendation
                setGifKeyword={setGifKeyword}
                key={idea}
                name={idea}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
}
