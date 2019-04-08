const Socket = require("./lib/socket");
const HttpServer = require("./lib/http");

new HttpServer(8000)
  .applyBodyParserMiddleware()
	.applyCorsMiddleware()
	.attachChalkToReq()
	.connectDatabase("react_test")
  .addRoute("/auth", require("./servers/httpServer/routes/auth"))
  .startServer()
  .then(d => console.log(`Http Server Listening @Port ${d}`))
  .catch(err => console.log(err));

new Socket(9000).init()._io.on("connection", socket => {
  console.log(`New User connected ${socket.id}`);
});
