import { useState, useEffect, useContext } from "react";
import { GameContext } from "../Game";

function CompareStage({
    playerChoice,
    setPlayerChoice,
    computerChoice,
    setComputerChoice,
    optionImages,
}) {
    const [winner, setWinner] = useState("");
    const { score, setScore } = useContext(GameContext);

    const getWinner = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) return "DRAW";

        const winningCombinations = {
            scissors: ["paper", "lizard"],
            paper: ["rock", "spock"],
            rock: ["scissors", "lizard"],
            lizard: ["paper", "spock"],
            spock: ["scissors", "rock"],
        };

        return winningCombinations[playerChoice].includes(computerChoice)
            ? "YOU WIN"
            : "YOU LOSE";
    };

    useEffect(() => {
        // Run only if both choices exist
        if (!playerChoice || !computerChoice) return;

        const result = getWinner(playerChoice, computerChoice);
        setWinner(result);

        if (result === "YOU WIN") {
            setScore((prev) => ({ ...prev, player: prev.player + 1 }));
        } else if (result === "YOU LOSE") {
            setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
        }
    }, [playerChoice, computerChoice, setScore]);

    const handleReset = () => {
        setPlayerChoice("");
        setComputerChoice("");
    };

    return (
        <div className="pickedContainer">
            <div className="playerContainer">
                <h2>YOU PICKED</h2>
                <div
                    className={`playerPicked ${playerChoice} ${
                        winner === "YOU WIN" && "winner"
                    }`}
                >
                    <img src={optionImages[playerChoice]} alt={playerChoice} />
                </div>
            </div>

            <div className="resultContainer">
                {winner && (
                    <>
                        <h1>{winner}</h1>
                        <button onClick={handleReset}>PLAY AGAIN</button>
                    </>
                )}
            </div>

            <div className="computerContainer">
                <h2>THE HOUSE PICKED</h2>

                <div
                    className={`computerPicked ${computerChoice} ${
                        winner === "YOU LOSE" && "winner"
                    }   `}
                >
                    {computerChoice && (
                        <img
                            src={optionImages[computerChoice]}
                            alt={computerChoice}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompareStage;
