export class Player {
    constructor(name, color, cards) {
        this.name = name;
        this.color = color;
        this.cards = cards;
        this.points = 0;
        this.effects = [];
        this.owned = [];
        this.handLength = cards.length;
    }
    display() {
        const container = document.querySelector('.wrapper');
        container.insertAdjacentHTML('beforeend', `<div class="player"><h2 class="player__name">${this.name}</h2><div class="player__points-counter">${this.points}</div><div class="player__stages-counter"></div></div>`);
        container.querySelector('.player').style.backgroundColor = this.color;
        container.insertAdjacentHTML('beforeend', '<div class="hand"></div>');
        const hand = container.querySelector('.hand');
        for (let i = 0; i < this.cards.length; i++) {
            hand.insertAdjacentHTML('beforeend', `<div class='hand__card'><p class="hand__card-name">${this.cards[i].name}</p></div>`);
        }
        const cardsInHand = document.querySelectorAll('.hand__card');
        for (let i = 0; i < cardsInHand.length; i++) {
            cardsInHand[i].style.backgroundColor = this.color;
        }
    }
}