const readline = require('readline');
const message = require('./messages.js');
const gameRules = require('./rules.js');
const error = require('./errors.js');
const help = require('./help.js');
const CryptoKey = require('./cryptoKey.js');

async function game() {
  const moves = process.argv.slice(2);
  if (error.getErrorsMessage(error.isValidChoises(moves))) return 1;
  let userMove = '';
  while (userMove !== '0') {
    printGameMenu(moves);
    let compMoveIndex = getRandomInt(0, moves.length - 1);
    let compMove = moves[compMoveIndex];
    let cryptoKey = new CryptoKey(compMove);
    console.log(message.HMAC + message.сolon, cryptoKey.getHMAC());
    
	do {
      userMove = await getUserChoise();
      if (userMove === '?') {
        help.getHelpTable(moves);
        userMove = '';
      }
    } while (
      !((userMove >= 0 && userMove <= moves.length) || userMove === '?') ||
      userMove === ''
    );

    if (userMove === '0') return 0;
    
	let userChoice = moves[userMove - 1];
    console.log(
		message.yourChoise + message.сolon,
      userChoice
    );
    console.log(
		message.computerChoise + message.сolon,
      compMove
    );
    
	let gameResult = gameRules.getGameResultMessage(
      userChoice,
      compMove,
      moves
    );
    console.log(message.appeal + message.сolon, gameResult);
    console.log(
		message.HMACKey + message.сolon,
      cryptoKey.randomKey
    );
  }
}

function printGameMenu(moves) {
  console.log(message.gameOptions + message.сolon);
  moves.forEach((option, index) => {
    console.log(index + 1 + '. ' + option);
  });
  console.log('?.', message.help);
  console.log('0.', message.exit);
}

function getUserChoise() {
  const readValue = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let userChoice = new Promise((fnResolve) => {
    readValue.question(
		message.chooseOption + message.сolon + ' ',
      (answer) => {
        readValue.close();
        fnResolve(answer);
      }
    );
  });
  return userChoice;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

game();
