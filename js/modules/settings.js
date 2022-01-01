import { ItemCard, HonorCard, ShitCard, Deck, MoneyCard } from "./deck.js";
import { Player } from "./player.js";
const itemNames = ['ring', 'horse', 'car', 'unknown thing', 'statue', 'yacht', 'mansion', 'plane', 'castle', 'island'];
const itemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const honorNames = ['medal', 'star', 'title'];
const shitNames = ['thief', '-5', 'arrest'];
const shitStatuses = [0, 0, 1];
const moneyValues = [1, 2, 3, 4, 6, 8, 10, 12, 15, 20, 25];
const moneyNames = moneyValues.map(item => item + 'M');
const itemCards = itemNames.map((item, i) => new ItemCard(item, 'item', itemValues[i]));
const honorCards = honorNames.map(item => new HonorCard(item, 'honor'));
const shitCards = shitNames.map((item, i) => new ShitCard(item, 'shit', shitStatuses[i]));
const moneyCards = moneyNames.map((item, i) => new MoneyCard(item, 'money', moneyValues[i]));
const cards = [...itemCards, ...honorCards, ...shitCards];
const deck = new Deck(cards);
deck.shuffle();
const playerNames = ['Andrew', 'Boris', 'Clement', 'Derek'];
const playerColors = ['red', 'yellow', 'blue', 'green'];
const players = playerNames.map((player, i) => new Player(player, playerColors[i], moneyCards));
export const settings = {
    'players': players,
    'deck': deck
}