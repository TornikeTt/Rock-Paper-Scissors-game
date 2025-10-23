import logo from "../../assets/images/logo-bonus.svg";

function Header() {
    return (
        <header>
            <div className="play-option-logo">
                <img src={logo} />
            </div>
            <div className="score">
                <h2>SCORE</h2>
                <p>12</p>
            </div>
        </header>
    );
}

export default Header;
