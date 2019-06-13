// Import
var createError = require('http-errors');
var express = require('express');

var hostname = 'localhost';
var port = 3000;

var app = express();

// Data
var data = require('./data.json');
var monsters = data.monsters;

// Get /monsters
app.get('/monsters', function(req, res, next) {
	res.send(monsters);
});
// Get /monsters/:id
app.get('/monsters/:id', function(req, res, next) {
	res.send(monsters[req.params.id - 1]);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, '404 Not Found'));
});

// error handler
app.use(function(err, req, res, next) {
  res.send(err.message);
});

app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n");
});
