function Header() {
    return (
        <header>
            <div className="play-option-list">
                <ul>
                    <li>ROCK</li>
                    <li>PAPER</li>
                    <li>SCISSORS</li>
                    <li>LIZARD</li>
                    <li>SPOCK</li>
                </ul>
            </div>
            <div className="score">
                <h2>SCORE</h2>
                <p>12</p>
            </div>
        </header>
    );
}

export default Header;
