const io = require("socket.io");

class Socket {
  // _portNumber;
  // _io;

  constructor(portNumber) {
    this._portNumber = portNumber;
  }
  init() {
    this._io = io(this._portNumber);
    return this;
  }
}

module.exports = Socket;
