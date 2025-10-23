import pentagonShape from "../../assets/images/bg-pentagon.svg";

import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";

function Play() {
    return (
        <div className="gamePlay">
            <div className="pentagon-container">
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
            </div>
        </div>
    );
}

export default Play;
