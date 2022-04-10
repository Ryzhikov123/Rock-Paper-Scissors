const message = require('./messages.js');

class Error {
  isValidChoises(gameOptions) {
    if (gameOptions.length < 3) {
      return 'ErrorNotEnoughOptions';
    } else if (gameOptions.length % 2 === 0) {
      return 'ErrorEvenNumberOfOptions';
    } else if (gameOptions.length !== [...new Set(gameOptions)].length) {
      return 'ErrorDublicateOptions';
    }
    return 'NoError';
  }

  getErrorsMessage(error) {
    switch (error) {
      case 'ErrorNotEnoughOptions':
        console.log(
          message.errorIncorrectOptions,
          message.errorNotEnoughOptions,
          message.correctExample
        );
        return 1;
      case 'ErrorEvenNumberOfOptions':
        console.log(
          message.errorIncorrectOptions,
          message.errorEvenNumberOfOptions,
          message.correctExample
        );
        return 1;
      case 'ErrorDublicateOptions':
        console.log(
          message.errorIncorrectOptions,
          message.errorDublicateOptions,
          message.correctExample
        );
        return 1;
      case 'NoError':
        return 0;
    }
  }
}

module.exports = new Error();
