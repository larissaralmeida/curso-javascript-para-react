import "./src/components/styles/settings/colors.css";
import "./src/components/styles/settings/elements/base.css";
import "./src/components/styles/generic/reset.css";



import CardGame from "./src/components/CardGame";
import BoardGame from "./src/components/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
