export class Game {
    constructor(players, deck) {
        this.players = players;
        this.deck = deck;
        this.stage = 0;
        this.betsDone = 0;
        this.moveOrder = [...players];
    }
    collectPlayers() {
        this.players.map(player => player.setGame(this));
    }
    move() {
        const activePlayer = this.moveOrder[0];
        console.log(activePlayer);
        // if (this.players.reduce((acc, player) => acc += player.biddingDone)){

        // }
        const card = this.deck.draw();
        card.display();
        if (card.status) this.stage++;
        if (this.stage > 3) return 'Game over';
        // this.players.forEach(player => {
        //     player.display();
        //     player.bet();
        // });
        activePlayer.display();
        activePlayer.displayPass();
        activePlayer.bet();
        return 0;
    }
    static clearField() {
        document.querySelector('.gamefield__card').remove();
        document.querySelector('.player').remove();
        document.querySelector('.hand').remove();
        document.querySelector('.passbutton').remove();
    }
}