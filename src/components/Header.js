import Finder from "./Finder";
import logo from "../images/logo-gif.svg";

import "../styles/Header.scss";

export default function Header({ setGifKeyword }) {
  return (
    <header className="header">
      <div className="header__info">
        <a href="/">
          <img className="header__logo" src={logo} alt="Finder Logo"></img>
        </a>
        <h3 className="header__title">
          How do you <span>gif</span> today?
        </h3>
      </div>
      <div className="header__finder">
        <Finder setGifKeyword={setGifKeyword} />
      </div>
    </header>
  );
}
