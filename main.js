import "./src/components/styles/settings/colors.css";
import "./src/components/styles/settings/elements/base.css";
import "./src/components/styles/generic/reset.css";



import CardGame from "./src/components/CardGame";
import BoardGame from "./src/components/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML('beforeend', 
    `
        ${PlayerName('Player1')}
        ${PlayerName('Player2')}
        ${BoardGame(6)}

    `

);
