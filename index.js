var express = require('express');
var app = express();

var PORT = process.env.PORT || process.argv[2] || 80;
app.get('/', function(req, res) {
  res.send('Hello World!' +
        '<br>This message sent with node.js using express');
});

app.listen(PORT, function() {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  console.log('Example app listening on port ' + PORT + '!');
});
