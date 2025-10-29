import { useState, createContext } from "react";
import Header from "./Header/Header";
import Play from "./Play/Play";
import Footer from "./Footer";

import rock_paper_sissors_RULES from "../../assets/images/image-rules.svg";
import rock_paper_sissors_lizard_spock_RULES from "../../assets/images/image-rules-bonus.svg";
import { MdOutlineClose } from "react-icons/md";

import "./Game.scss";

export const GameContext = createContext();

function Game({ gameMode, setGameMode }) {
    const [isRulsOpen, setIsRulesOpen] = useState(false);
    const [score, setScore] = useState({
        player: 0,
        computer: 0,
    });

    const rulesLeyout =
        gameMode === "rock-paper-scissors"
            ? rock_paper_sissors_RULES
            : rock_paper_sissors_lizard_spock_RULES;

    return (
        <main>
            <Header gameMode={gameMode} score={score} />

            <GameContext.Provider value={{ score, setScore }}>
                <Play gameMode={gameMode} />
            </GameContext.Provider>

            {isRulsOpen && (
                <div className="rules-content">
                    <h2>RULES</h2>
                    <button
                        onClick={() => setIsRulesOpen(false)}
                        type="button"
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
