var compression = require('compression');
var express = require('express');

require('dotenv').config();

var app = express();
module.exports = app;

app.use(compression());

var path = require('path');
app.use(express.static(path.resolve('./public')));


app.get('/', (req, res) => {
	res.sendFile('dashboard.html', { root: __dirname + "/public" });
});

app.get('/calculator', (req, res) => {
	res.sendFile('calculator.html', { root: __dirname + "/public" });
});

app.get('/medication.html', (req, res) => {
	res.sendFile('medication.html', { root: __dirname + "/public" });
});


const url = "https://covid-193.p.rapidapi.com/countries";
fetch(url, {
	method: "GET",
	withCredentials: true,
	headers: {
		"X-Auth-Token": process.env.API_KEY,
	}
})
	.then(resp => resp.json())
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log(error);
	});
