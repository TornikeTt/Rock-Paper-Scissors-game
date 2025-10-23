import FiveOptionGameLogo from "../../assets/images/logo-bonus.svg";
import ThreeOptionGameLogo from "../../assets/images/logo.svg";

function Header({ gameMode }) {
    const logo =
        gameMode === "rock-paper-scissors"
            ? ThreeOptionGameLogo
            : FiveOptionGameLogo;

    return (
        <header>
            <div className="play-option-logo">
                <img src={logo} />
            </div>
            <div className="score">
                <h2>SCORE</h2>
                <p>12</p>
            </div>
        </header>
    );
}

export default Header;
