const gameResult = require('./rules.js');
const message = require('./messages.js');

class Help {
  getHelpTable(gameOptions) {
    let blankSpace = message.space;
    gameOptions.forEach(
      (gameOption) =>
        (blankSpace += String(message.space + gameOption).slice(-10))
    );
    console.log(blankSpace);
    gameOptions.forEach((gameOption1) => {
      blankSpace = String(message.space + gameOption1).slice(-10);
      gameOptions.forEach((gameOption2) => {
        blankSpace += String(
          message.space +
            gameResult.getGameResult(gameOption1, gameOption2, gameOptions)
        ).slice(-10);
      });
      console.log(blankSpace);
    });
  }
}

module.exports = new Help();
