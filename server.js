var compression = require('compression');
var express = require('express');
var fetch = require("node-fetch");

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

app.get('/data', (req, res) => {

	var globalCases = 0;
	var globalRecovered = 0;
	var globalNew = 0;
	var globalDeath = 0;

	var usaCases = 0;
	var usaRecovered = 0;
	var usaNew = 0;
	var usaDeath = 0;


	const url = "https://covid-193.p.rapidapi.com/statistics";
	fetch(url, {
		method: "GET",
		withCredentials: true,
		"headers": {
			"x-rapidapi-host": "covid-193.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY
		}
	})
		.then(resp => resp.json())
		.then(function (data) {
			for (countries in data.response) {
				if (data.response[countries].country == 'All') {
					globalCases = data.response[countries].cases.total;
					globalRecovered = data.response[countries].cases.recovered;
					globalNew = data.response[countries].cases.new;
					globalDeath = data.response[countries].deaths.total;
				}
				if (data.response[countries].country == 'USA') {
					usaCases = data.response[countries].cases.total;
					usaRecovered = data.response[countries].cases.recovered;
					usaNew = data.response[countries].cases.new;
					usaDeath = data.response[countries].deaths.total;
				}
			}

		})

		.catch(function (error) {
			console.log(error);
		});

	res.json(
		[
			{GlobalCases : globalCases, GlobalRecovered : globalRecovered, GlobalNew : globalNew, GlobalDeath : globalDeath}, 
			{USACases : usaCases, USARecovered : usaRecovered, USANew : usaNew, USADeath : usaDeath}, 
		]
	);
});


