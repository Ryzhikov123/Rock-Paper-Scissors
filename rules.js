const message = require('./messages.js');

class GameRules {
  results = [message.draw, message.lose, message.win];


  getResultIndex(userMove, compMove, gameOptions) {
    let userMoveIndex = gameOptions.indexOf(userMove);
    let comMoveIndex = gameOptions.indexOf(compMove);
    let verifiableIndex = comMoveIndex - userMoveIndex;
    if (verifiableIndex < 0) {
      verifiableIndex += gameOptions.length;
    }
    while (verifiableIndex > 2) {
      verifiableIndex -= 2;
    }
    return verifiableIndex;
  }

  getGameResult(userMove, compMove, gameOptions) {
    return this.results[this.getResultIndex(userMove, compMove, gameOptions)];
  }

  getGameResultMessage(userMove, compMove, gameOptions) {
    return this.results[
      this.getResultIndex(userMove, compMove, gameOptions)
    ];
  }
}

module.exports = new GameRules();
