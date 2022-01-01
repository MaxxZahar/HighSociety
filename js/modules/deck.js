export class Deck {
    constructor(cards) {
        this.cards = cards;
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}

class Card {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

export class ItemCard extends Card {
    constructor(name, type, value) {
        super(name, type);
        this.value = value;
    }
}

export class HonorCard extends Card {
    constructor(name, type) {
        super(name, type);
        this.status = 1;
    }
}

export class ShitCard extends Card {
    constructor(name, type, status) {
        super(name, type);
        this.status = status;
    }
}

export class MoneyCard extends Card {
    constructor(name, type, value) {
        super(name, type);
        this.value = value;
    }
}