import "./GameOptionSelector.scss";

function GameOptionSelector({ setGameMode }) {
    return (
        <section className="options">
            <button
                type="button"
                className="rock-paper-scissors"
                title="Rock Paper Scissors Game"
                aria-label="Rock Paper Scissors Game"
                onClick={() => setGameMode("rock-paper-scissors")}
            ></button>
            <button
                type="button"
                className="rock-paper-scissors-lizard-spock"
                title="Rock Paper Scissors Lizard Spock Game"
                aria-label="Rock Paper Scissors Lizard Spock Game"
                onClick={() => setGameMode("rock-paper-scissors-lizard-spock")}
            ></button>
        </section>
    );
}

export default GameOptionSelector;
