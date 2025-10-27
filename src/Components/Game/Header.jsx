import rock_paper_sissors_LOGO from "../../assets/images/logo.svg";
import rock_paper_scissors_lizard_spock_LOGO from "../../assets/images/logo-bonus.svg";

function Header({ gameMode }) {
    const logo =
        gameMode === "rock-paper-scissors"
            ? rock_paper_sissors_LOGO
            : rock_paper_scissors_lizard_spock_LOGO;

    return (
        <header>
            <div className="play-option-logo">
                <img src={logo} />
            </div>
            <div className="score">
                <h2>SCORE</h2>
                <p>0</p>
            </div>
        </header>
    );
}

export default Header;
