import { useState } from "react";
import pentagonShape from "../../../assets/images/bg-pentagon.svg";
import triangleShape from "../../../assets/images/bg-triangle.svg";

import rock from "../../../assets/images/icon-rock.svg";
import paper from "../../../assets/images/icon-paper.svg";
import scissors from "../../../assets/images/icon-scissors.svg";
import lizard from "../../../assets/images/icon-lizard.svg";
import spock from "../../../assets/images/icon-spock.svg";

import "./Play.scss";

function Play({ gameMode }) {
    const optionImages = {
        rock,
        paper,
        scissors,
        lizard,
        spock,
    };

    const gameOptions =
        gameMode === "rock-paper-scissors"
            ? ["rock", "paper", "scissors"]
            : ["scissors", "paper", "spock", "rock", "lizard"];

    const isClassic = gameMode === "rock-paper-scissors";

    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");

    const handleChoice = (option) => {
        setPlayerChoice(option);

        const randomChoice =
            gameOptions[Math.floor(Math.random() * gameOptions.length)];

        setTimeout(() => setComputerChoice(randomChoice), 1000);
    };

    const handleReset = () => {
        setPlayerChoice("");
        setComputerChoice("");
    };

    return (
        <div className="gamePlay">
            {playerChoice === "" ? (
                <div className="shape-container">
                    <div className={isClassic ? "triangle" : "pentagon"}>
                        <img
                            src={isClassic ? triangleShape : pentagonShape}
                            alt={isClassic ? "triangle" : "pentagon"}
                            className={
                                isClassic ? "triangleShape" : "pentagonShape"
                            }
                        />

                        {gameOptions.map((option) => (
                            <button
                                key={option}
                                className={`btn ${option}`}
                                onClick={() => handleChoice(option)}
                            >
                                <img src={optionImages[option]} alt={option} />
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="pickedContainer">
                    <div className="playerContainer">
                        <h2>YOU PICKED</h2>
                        <div className={`playerPicked ${playerChoice}`}>
                            <img
                                src={optionImages[playerChoice]}
                                alt={playerChoice}
                            />
                        </div>
                    </div>

                    {playerChoice && computerChoice && (
                        <div className="resultContainer">
                            <h1>YOU LOSE</h1>
                            <button onClick={handleReset}>PLAY AGAIN</button>
                        </div>
                    )}

                    <div className="computerContainer">
                        <h2>THE HOUSE PICKED</h2>

                        <div className={`computerPicked ${computerChoice}`}>
                            {computerChoice && (
                                <img
                                    src={optionImages[computerChoice]}
                                    alt={computerChoice}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Play;
