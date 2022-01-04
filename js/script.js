import { settings } from "./modules/settings.js";
import { Game } from "./modules/game.js";
const { players, deck } = settings;
const game = new Game(players, deck);
game.collectPlayers();
console.log(players[0].game);
console.log(game.move());