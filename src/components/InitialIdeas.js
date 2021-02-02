import GifRecommendation from "./GifRecommendation";

export default function InitialIdeas({ setGifKeyword }) {
  const initialIdeasForUsers = ["pandas", "cats", "dogs"];
  return (
    <form>
      <div className="initial-ideas__options">
        <p className="initial-ideas__options--text">
          ¿No sabes por dónde empezar?
        </p>
        <div className="initial-ideas__options--recommendations">
          {initialIdeasForUsers.map((idea) => {
            console.log(idea);
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
