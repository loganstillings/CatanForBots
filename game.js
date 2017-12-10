const Board = require('./board.js');

class Game {
  constructor(...players) { 
    this.board = new Board();
    this.players = players
  }

  setupBoard() {
    this.board.generateTiles();
    this.board.connectNeighborTiles();
  }

  setupInitialSettlements() {
    for (let i = 0; i < this.players.length; i++) {
      // this.players[i].placeInitialSettlement;
    }
    for (let i = this.players.length - 1; i >= 0; i--) {
      // this.players[i].placeInitialSettlement;
    }  
  }
}

temp = new Game('msm', 'lat', 'xor', 'pyt')
temp.setupBoard();
// temp.setupInitialSettlements();
console.log(temp.board);