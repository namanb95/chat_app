import openSocket from "socket.io-client";

class SocketAdaptor {
  constructor(url) {
    this.socket = openSocket(url);
  }

  on(event) {
    return new Promise((resolve, reject) => {
      this.socket.on(event, data => resolve(data));
      this.socket.on("error", err => reject(err));
    });
  }

  emit(event, data) {
    this.socket.emit(event, data);
  }
}

export default SocketAdaptor;
