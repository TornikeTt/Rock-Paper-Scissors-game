import pentagonShape from "../../../assets/images/bg-pentagon.svg";
import triangleShape from "../../../assets/images/bg-triangle.svg";

function Pickstage({
    gameMode,
    optionImages,
    setPlayerChoice,
    setComputerChoice,
}) {
    const isClassic = gameMode === "rock-paper-scissors";

    const gameOptions =
        gameMode === "rock-paper-scissors"
            ? ["rock", "paper", "scissors"]
            : ["scissors", "paper", "spock", "rock", "lizard"];

    const handleChoice = (option) => {
        setPlayerChoice(option);

        const randomChoice =
            gameOptions[Math.floor(Math.random() * gameOptions.length)];

        setTimeout(() => setComputerChoice(randomChoice), 1000);
    };

    return (
        <div className="shape-container">
            <div className={isClassic ? "triangle" : "pentagon"}>
                <img
                    src={isClassic ? triangleShape : pentagonShape}
                    alt={isClassic ? "triangle" : "pentagon"}
                    className={isClassic ? "triangleShape" : "pentagonShape"}
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
    );
}

export default Pickstage;
