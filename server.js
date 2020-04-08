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
	if (req.headers.host.match(/^www/) == null) {
		res.redirect('http://www.webcovid-19.live', 301);
	}
	else {
		res.sendFile('dashboard.html', { root: __dirname + "/public" });
	}
	
});

app.get('/calculator', (req, res) => {
	res.sendFile('calculator.html', { root: __dirname + "/public" });
});

app.get('/medication', (req, res) => {
	res.sendFile('medanalyzer.html', { root: __dirname + "/public" });
});

app.get('/map', (req, res) => {
	res.sendFile('map.html', { root: __dirname + "/public" });
});

app.get('/statistics', (req, res) => {
	res.sendFile('statistics.html', { root: __dirname + "/public" });
});

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/data', async (req, res) => {
	getJSON().then(data => { 
		setData(data)
		res.json
		(
			[
				{ GlobalCases: globalCases, GlobalRecovered: globalRecovered, GlobalNew: globalNew, GlobalDeath: globalDeath },
				{ USACases: usaCases, USARecovered: usaRecovered, USANew: usaNew, USADeath: usaDeath },
			]
		);
	});
});

app.get('/all', async (req, res) => {
	getJSON().then(data => { 
		res.json(data.response);
	});
});

var errorHandler = require('express-error-handler'),
  handler = errorHandler({
    static: {
      '404': 'public/404.html'
    }
  });

// After all your routes...
// Pass a 404 into next(err)
app.use( errorHandler.httpError(404) );

// Handle all unhandled errors:
app.use( handler );

var globalCases = 0;
var globalRecovered = 0;
var globalNew = 0;
var globalDeath = 0;

var usaCases = 0;
var usaRecovered = 0;
var usaNew = 0;
var usaDeath = 0;

const url = "https://covid-193.p.rapidapi.com/statistics";

async function getJSON() {
	let response = await fetch(url, {
		method: "GET",
		withCredentials: true,
		"headers": {
			"x-rapidapi-host": "covid-193.p.rapidapi.com",
			"x-rapidapi-key": process.env.API_KEY
		}
	});
	let data = await response.json();
	return data;
}

function setData(data) {
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
}

