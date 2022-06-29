import "./src/components/styles/settings/colors.css";
import "./src/components/styles/settings/elements/base.css";
import "./src/components/styles/generic/reset.css";



import CardGame from "./src/components/CardGame";
import BoardGame from "./src/components/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";
import ScoreBoard from "./src/components/objects/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML('beforeend', 
    `
        ${ScoreBoard()}
        ${BoardGame(6)}

    `

);
