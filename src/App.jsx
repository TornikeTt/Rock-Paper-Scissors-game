import { useState } from "react";

import GameOptionSelector from "./Components/GameOptionSelector/GameOptionSelector.jsx";
import Game from "./Components/Game/Main.jsx";

import "./App.scss";

function App() {
    const [gameMode, setGameMode] = useState(null);

    if (gameMode != null) {
        return <Game />;
    } else {
        return <GameOptionSelector setGameMode={setGameMode} />;
    }
}

export default App;
