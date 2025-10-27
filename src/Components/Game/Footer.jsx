import { FaArrowLeft } from "react-icons/fa";

function Footer({ gameMode, setGameMode, isRulsOpen, setIsRulesOpen }) {
    return (
        <footer>
            <button className="back" onClick={() => setGameMode(null)}>
                <FaArrowLeft />
                <span>BACK</span>
            </button>
            <button
                className="rules"
                onClick={() => setIsRulesOpen(!isRulsOpen)}
            >
                RULES
            </button>
        </footer>
    );
}

export default Footer;
