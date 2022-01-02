import { settings } from "./modules/settings.js";
import { Game } from "./modules/game.js";
const { players, deck } = settings;
const game = new Game(players, deck);
players[0].display();
console.log(game);
console.log(game.round());