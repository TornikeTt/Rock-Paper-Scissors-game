import rock_paper_sissors_LOGO from "../../../assets/images/logo.svg";
import rock_paper_scissors_lizard_spock_LOGO from "../../../assets/images/logo-bonus.svg";

import { IoIosPerson } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";

import "./Header.scss";

function Header({ gameMode, score }) {
    const logo =
        gameMode === "rock-paper-scissors"
            ? rock_paper_sissors_LOGO
            : rock_paper_scissors_lizard_spock_LOGO;

    return (
        <header>
            <div className="play-option-logo">
                <img src={logo} />
            </div>

            <div className="scoreContainer">
                <h2>SCORE</h2>

                <div className="score">
                    <section>
                        <IoIosPerson />
                        <p>{score.player}</p>
                    </section>

                    <hr />

                    <section>
                        <FaComputer />
                        <p>{score.computer}</p>
                    </section>
                </div>
            </div>
        </header>
    );
}

export default Header;
