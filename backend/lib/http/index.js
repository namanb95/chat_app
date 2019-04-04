const express = require("express");

class HttpServer {
  constructor(portNumber) {
    this.app      = express();;
    this.port     = portNumber;
  }

  applyBodyParserMiddleware() {
    const bodyParser = require("body-parser");
    this.app.use(bodyParser.urlencoded({ extended: true, limit: "2mb" }));
    return this;
  }

  applyCorsMiddleware() {
    let cors = require("cors");
    this.app.use(cors());
    return this;
  }

  addRoute(route,cb) {
    this.app.use(route,cb);
    return this;
  }

  startServer() {
    // console.log(this)
    return new Promise((res, rej) => {
      this.app.listen(this.port, (d, err) => {
        if (err) return rej(err);
        return res(this.port);
      });
    });
  }
}

module.exports = HttpServer;
