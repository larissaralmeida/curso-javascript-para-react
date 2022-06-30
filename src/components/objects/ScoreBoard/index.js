import PlayerName from "../../PlayerName";
import PlayerScore from "../../PlayerScore";
import vsPlayer from "../../vsPlayer";
import './style.css'

function ScoreBoard() {
    return `
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerScore(1)}
            ${vsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Player2")}
        </header>
    
    `;
}

export default ScoreBoard;