const express = require("express");
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, () => {
  console.log("Server running on port 3000...");
})
