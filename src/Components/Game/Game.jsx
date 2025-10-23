import Header from "./Header";
import Play from "./Play";
import Footer from "./Footer";

import "./Game.scss";

function Game({ gameMode, setGameMode }) {
    return (
        <main>
            <Header gameMode={gameMode} />
            <Play gameMode={gameMode} />
            <Footer gameMode={gameMode} setGameMode={setGameMode} />
        </main>
    );
}

export default Game;
