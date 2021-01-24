import logo from "../images/logo-gif.svg";

export default function Header() {
    return(
        <header className="header">
            <a href="/"><img className="header__logo" src={logo}></img></a>
            <h3 className="header__title">Tu <span>día</span> se merece un <span>gif</span></h3>
        </header>
    )
}