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

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => console.log(`listening on port ${ip.address()}:${port}`));