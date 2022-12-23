var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var ip = require("ip");

app.use(express.static('public'));

app.ws('/', function (ws, req) {
  let seconds = 1
  setInterval(() => {
    ws.send(seconds);
    seconds++;
  }, 1000);
});

app.listen(3000, '0.0.0.0', () => console.log(`listening on port ${ip.address()}:3000`));