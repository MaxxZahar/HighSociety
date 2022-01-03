import { settings } from "./modules/settings.js";
import { Game } from "./modules/game.js";
const { players, deck } = settings;
const game = new Game(players, deck);
console.log(game);
console.log(game.round());