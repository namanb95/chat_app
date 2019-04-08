const express = require("express");
const chalk   = require("chalk")
class HttpServer {
  constructor(portNumber) {
    this.app = express();
    this.port = portNumber;
  }

  applyBodyParserMiddleware() {
    const bodyParser = require("body-parser");
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "1mb" }));
    return this;
  }

  applyCorsMiddleware() {
    let cors = require("cors");
    this.app.use(cors());
    return this;
	}
	
	attachChalkToReq(){
		this.app.use((req,res,next)=>{
			req.chalk = chalk;
			next();
		})
		return this;
	}

  connectDatabase(dbName, dbPath = "mongodb://127.0.0.1:27017") {
    let mongoose = require("mongoose");
    mongoose
      .connect(`${dbPath}/${dbName}`)
      .then(connected => {
        console.log(`Database connected ${chalk.cyan(`@${dbPath}/${dbName}`)} `);
      })
      .catch(err => {
        console.log(
          `Some error encountered while connecting to database \n${err}`
        );
        throw err;
      });
    return this;
  }

  addRoute(route, cb) {
    this.app.use(route, cb);
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
