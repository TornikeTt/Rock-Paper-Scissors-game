import { FaArrowLeft } from "react-icons/fa";

function Footer({ setGameMode }) {
    return (
        <footer>
            <button className="back" onClick={() => setGameMode(null)}>
                <FaArrowLeft />
                <span>BACK</span>
            </button>
            <button className="rules">RULES</button>
        </footer>
    );
}

export default Footer;
