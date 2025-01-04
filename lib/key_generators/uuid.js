const { randomUUID } = require('crypto');

module.exports = class UUIDGenerator {
  constructor(options, readyCallback) {
    if (readyCallback) readyCallback();
  }

  createKey() {
    return randomUUID();
  }
};
