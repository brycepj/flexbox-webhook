var express = require('express');
var app = express();

app.post('/github/flexbox', function (req, res) {
  fs.appendFile('buildLog.txt', 'webhook call' + new Date(), function (err) {
    console.log("There was an error");
  });
});

app.get('/github/flexbox', function (req, res) {
  res.send("hello I work");
});

app.listen(8181, function () {
  console.log('Example app listening on port 8080!');
});
