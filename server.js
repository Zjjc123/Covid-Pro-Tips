var compression = require('compression');
var express = require('express');

var app = express();
module.exports = app;

app.use(compression());

var path = require('path');
app.use(express.static(path.resolve('./public')));


app.get('/', (req, res) => {
	res.sendfile('home.html', { root: __dirname + "/public" } );
});

app.get('/calculator', (req, res) => {
	res.sendfile('calculator.html', { root: __dirname + "/public" } );
});

app.get('/safe-medication-mixing.html', (req, res) => {
	res.sendfile('medication.html', { root: __dirname + "/public" } );
});