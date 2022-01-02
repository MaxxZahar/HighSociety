export class Player {
    constructor(name, color, cards) {
        this.name = name;
        this.color = color;
        this.cards = cards;
        this.points = 0;
        this.effects = [];
        this.owned = [];
        this.handLength = cards.length;
        this.currentBetSum = 0;
        this.biddingDone = false;
    }
    static maxBet = 0;
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
    bet() {
        const cards = document.querySelectorAll('.hand__card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', e => {
                const value = Number(cards[i].querySelector('.hand__card-name').textContent.slice(0, -1));
                this.currentBetSum += value;
                cards[i].style.opacity = 0.5;
                if (this.currentBetSum > Player.maxBet) {
                    this.biddingDone = true;
                    Player.maxBet = this.currentBetSum;
                }
            }, { 'once': true });
        }
    }
}