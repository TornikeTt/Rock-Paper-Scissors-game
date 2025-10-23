import pentagonShape from "../../assets/images/bg-pentagon.svg";
import triangleShape from "../../assets/images/bg-triangle.svg";

import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";

function Play({ gameMode }) {
    const layoutSetting = () => {
        if (gameMode === "rock-paper-scissors") {
            return (
                <div className="triangle">
                    <img src={triangleShape} alt="triangle" />

                    <button class="btn paper">
                        <img src={paper} alt="paper" />
                    </button>

                    <button class="btn scissors">
                        <img src={scissors} alt="scissors" />
                    </button>

                    <button class="btn rock">
                        <img src={rock} alt="rock" />
                    </button>
                </div>
            );
        } else {
            return (
                <div className="pentagon">
                    <img src={pentagonShape} alt="pentagon" />

                    <button class="btn scissors">
                        <img src={scissors} alt="scissors" />
                    </button>

                    <button class="btn paper">
                        <img src={paper} alt="paper" />
                    </button>

                    <button class="btn spock">
                        <img src={spock} alt="spock" />
                    </button>

                    <button class="btn rock">
                        <img src={rock} alt="rock" />
                    </button>
                    <button class="btn lizard">
                        <img src={lizard} alt="lizard" />
                    </button>
                </div>
            );
        }
    };

    return (
        <div className="gamePlay">
            <div className="shape-container">{layoutSetting()}</div>
        </div>
    );
}

export default Play;
