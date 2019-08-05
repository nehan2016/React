var express = require('express');

var app = express()

app.get('/nareshit', function(req, res){
console.log(JSON.stringify(req.query));
  res.sendStatus(200);
});

app.get('/nareshit/:p', function(req, res){
console.log(JSON.stringify(req.params));
  res.sendStatus(200);
});

app.listen(3333);
