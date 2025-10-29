import { useState } from "react";
import Pickstage from "./pickStage";
import CompareStage from "./CompareStage";

import rock from "../../../assets/images/icon-rock.svg";
import paper from "../../../assets/images/icon-paper.svg";
import scissors from "../../../assets/images/icon-scissors.svg";
import lizard from "../../../assets/images/icon-lizard.svg";
import spock from "../../../assets/images/icon-spock.svg";

import "./Play.scss";

function Play({ gameMode }) {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");

    const optionImages = {
        rock,
        paper,
        scissors,
        lizard,
        spock,
    };

    return (
        <div className="gamePlay">
            {playerChoice === "" ? (
                <Pickstage
                    gameMode={gameMode}
                    setPlayerChoice={setPlayerChoice}
                    setComputerChoice={setComputerChoice}
                    optionImages={optionImages}
                />
            ) : (
                <CompareStage
                    playerChoice={playerChoice}
                    setPlayerChoice={setPlayerChoice}
                    computerChoice={computerChoice}
                    setComputerChoice={setComputerChoice}
                    optionImages={optionImages}
                />
            )}
        </div>
    );
}

export default Play;
