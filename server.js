// Import
var express = require('express');
var bodyParser = require('body-parser');

// Data
var data = require('./data.json');

var hostname = 'localhost';
var port = 3000;
var app = express();
var myRouter = express.Router();

app.use(bodyParser.json({ type: 'application/json' }));

// Monsters
// /
myRouter.route('/')
.all(function(req,res){
      res.json({message : "Bienvenue sur notre MHW API ", methode : req.method});
});
// /monsters
myRouter.route('/monsters')
.get(function(req,res){
		if (res.status = 200) {
			console.log(res.status);
			res.json(data.monsters);
		} else if (res.status = 404) {
			console.log(res.status);
			res.json({ error: 'Not found' });
		} else {
			console.log(res.status);
			res.json({ error: 'Something is wrong' });
		}
});
// /monsters/:id
myRouter.route('/monsters/:id')
.get(function(req,res){
		console.log(res.statusCode);
		if (res.status(200)) {
			res.json(data.monsters[req.params.id - 1]);
		} else {
			res.json({ error: '404 Not Found' });
		}
});

// Armors

// Weapons

// Materials


app.use(myRouter);

// Server
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n");
});
