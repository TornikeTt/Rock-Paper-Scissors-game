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
                    <img
                        src={triangleShape}
                        alt="triangle"
                        className="triangleShape"
                    />

                    <button className="btn paper">
                        <img src={paper} alt="paper" />
                    </button>

                    <button className="btn scissors">
                        <img src={scissors} alt="scissors" />
                    </button>

                    <button className="btn rock">
                        <img src={rock} alt="rock" />
                    </button>
                </div>
            );
        } else {
            return (
                <div className="pentagon">
                    <img
                        src={pentagonShape}
                        alt="pentagon"
                        className="pentagonShape"
                    />

                    <button className="btn scissors">
                        <img src={scissors} alt="scissors" />
                    </button>

                    <button className="btn paper">
                        <img src={paper} alt="paper" />
                    </button>

                    <button className="btn spock">
                        <img src={spock} alt="spock" />
                    </button>

                    <button className="btn rock">
                        <img src={rock} alt="rock" />
                    </button>
                    <button className="btn lizard">
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
