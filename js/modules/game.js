export class Game {
    constructor(players, deck) {
        this.players = players;
        this.deck = deck;
        this.stage = 0;
        this.betsDone = 0;
    }
    round() {
        const card = this.deck.draw();
        card.display();
        if (card.status) this.stage++;
        if (this.stage > 3) return 'Game over';
        // this.players.forEach(player => {
        //     player.display();
        //     player.bet();
        // });
        this.players[0].display();
        this.players[0].displayPass();
        this.players[0].bet();
        return 0;
    }
}