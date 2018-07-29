const express = require("express");
const app = express();
const axios = require("axios");

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, () => {
  console.log("Server running on port 3000...");
})

var CLIENT_ID = "";
var REDIRECT_URI = "http://localhost:3000/";
// axios.get(`https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`)
// .then(data => {
//   console.log(data);
// })
// .catch(e => {
//   console.log(e);
// })
var loggedIn = false, code = "";
app.get('/', (req, res) => {
  if(!loggedIn){
    res.redirect(`https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`);
  } else {
    code = req.query.code;
    console.log(code);
  }
});


app.get('insta', (req, res) => {
  console.log("------------------------insta-");
  res.send(200);
});
