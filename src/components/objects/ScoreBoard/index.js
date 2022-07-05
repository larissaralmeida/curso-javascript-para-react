import PlayerName from "../../PlayerName";
import PlayerScore from "../../PlayerScore";
import vsPlayer from "../../vsPlayer";
import './style.css'

function ScoreBoard() {
    return `
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerScore(2)}
            ${vsPlayer()}
            ${PlayerScore(3)}
            ${PlayerName("Player2")}
        </header>
    
    `;
}

export default ScoreBoard;