import "./GameOptionSelector.scss";

function GameOptionSelector({ setGameMode }) {
    return (
        <section className="options">
            <button
                type="button"
                className="rock-paper-scissors"
                title="Rock Raper Scissors"
                onClick={() => setGameMode("rock-paper-scissors")}
            ></button>
            <button
                type="button"
                className="rock-paper-scissors-lizard-spock"
                title="Rock-Paper-Scissors-Lizard-Spock"
                onClick={() => setGameMode("rock-paper-scissors-lizard-spock")}
            ></button>
        </section>
    );
}

export default GameOptionSelector;
