export class Player {
    constructor(name, color, cards) {
        this.name = name;
        this.color = color;
        this.cards = cards;
        this.points = 0;
        this.effects = [];
        this.owned = [];
    }
    display() {
        const container = document.querySelector('.wrapper');
        container.insertAdjacentHTML('beforeend', `<div class="player"><h2 class="player__name">${this.name}</h2><div class="player__points-counter">${this.points}</div><div class="player__stages-counter"></div></div>`);
        container.querySelector('.player').style.backgroundColor = this.color;
    }
}