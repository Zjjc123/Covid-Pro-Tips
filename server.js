var compression = require('compression');
const express = require('express');

var app = express();
module.exports = app;

app.use(compression());


var path = require('path');
app.use(express.static(path.resolve('./public')));


app.get('/', async function (req,res) {
	res.send("Welcome to the https server");
});

app.listen(80, () => console.log(`Listening on Port 80`))