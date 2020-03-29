var compression = require('compression');
var express = require('express');

var app = express();
module.exports = app;

app.use(compression());

var path = require('path');
app.use(express.static(path.resolve('./public')));


app.get('/', (req, res) => {
	res.sendfile('public.html', { root: __dirname + "/public/home.html" } );
});

app.get('/calculator', (req, res) => {
	res.sendfile('public.html', { root: __dirname + "/public/calculator.html" } );
});

app.get('/safe-medication-mixing.html', (req, res) => {
	res.sendfile('public.html', { root: __dirname + "/public/medication.html" } );
});