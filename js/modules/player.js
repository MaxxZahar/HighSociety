export class Player {
    constructor(name, color, cards) {
        this.name = name;
        this.color = color;
        this.cards = cards;
        this.points = 0;
        this.effects = [];
    }
}