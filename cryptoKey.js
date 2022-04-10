const secureRandom = require('secure-random');
const crypto = require('crypto');

class CryptoKey {
  constructor(compMove) {
    this.compMove = compMove;
    this.randomKey = this.getRandomKey();
  }

  getRandomKey() {
    let randomKey = secureRandom.randomBuffer(32).toString('hex');
    return randomKey;
  }

  getHMAC() {
    const HMAC = crypto
      .createHmac('SHA3-256', this.randomKey)
      .update(this.compMove)
      .digest('hex');
    return HMAC;
  }
}

module.exports = CryptoKey;
