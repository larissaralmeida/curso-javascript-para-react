import PlayerName from "../../PlayerName";
import vsPlayer from "../../vsPlayer";
import './style.css'

function ScoreBoard() {
    return `
        <header class="score-board">
            ${PlayerName("Player1")}
            ${vsPlayer()}
            ${PlayerName("Player2")}
        </header>
    
    `;
}

export default ScoreBoard;