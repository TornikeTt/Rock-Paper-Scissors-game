import { useState } from "react";
import Header from "./Header";
import Play from "./Play";
import Footer from "./Footer";

import rock_paper_sissors_RULES from "../../assets/images/image-rules.svg";
import rock_paper_sissors_lizard_spock_RULES from "../../assets/images/image-rules-bonus.svg";
import { MdOutlineClose } from "react-icons/md";

import "./Game.scss";

function Game({ gameMode, setGameMode }) {
    const rulesLeyout =
        gameMode === "rock-paper-scissors"
            ? rock_paper_sissors_RULES
            : rock_paper_sissors_lizard_spock_RULES;

    const [isRulsOpen, setIsRulesOpen] = useState(false);

    return (
        <main>
            <Header gameMode={gameMode} />
            <Play gameMode={gameMode} />
            {isRulsOpen && (
                <div className="rules-content">
                    <h2>RULES</h2>
                    <button
                        onClick={() => setIsRulesOpen(false)}
                        ype="button"
                        className="closeButton"
                    >
                        <MdOutlineClose className="closeIcone" />
                    </button>
                    <img src={rulesLeyout} alt="rules" />
                </div>
            )}
            <Footer
                gameMode={gameMode}
                setGameMode={setGameMode}
                isRulsOpen={isRulsOpen}
                setIsRulesOpen={setIsRulesOpen}
            />
        </main>
    );
}

export default Game;
