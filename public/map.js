var xmlhttp = new XMLHttpRequest();
var url = "https://www.webcovid-19.live/all";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var parsed = JSON.parse(this.responseText);
        SetMap(parsed);
    }
    var data = [{
      "country": "CN",
      "cases": {
        "new": "+31",
        "active": 2466,
        "critical": 633,
        "recovered": 75700,
        "total": 81470
      },
      "deaths": {
        "new": "+4",
        "total": 3304
      },
      "day": "2020-03-30",
      "time": "2020-03-30T21:15:07+00:00"
    }, {
      "country": "IT",
      "cases": {
        "new": "+4050",
        "active": 75528,
        "critical": 3981,
        "recovered": 14620,
        "total": 101739
      },
      "deaths": {
        "new": "+812",
        "total": 11591
      },
      "day": "2020-03-30",
      "time": "2020-03-30T21:15:06+00:00"
    }, {
      "country": "ES",
      "cases": {
        "new": "+5085",
        "active": 61075,
        "critical": 5231,
        "recovered": 16780,
        "total": 85195
      },
      "deaths": {
        "new": "+537",
        "total": 7340
      },
      "day": "2020-03-30",
      "time": "2020-03-30T21:15:06+00:00"
    }, {
      "country": "US",
      "cases": {
        "new": "+16198",
        "active": 151518,
        "critical": 3402,
        "recovered": 5220,
        "total": 159689
      },
      "deaths": {
        "new": "+368",
        "total": 2951
      },
      "day": "2020-03-30",
      "time": "2020-03-30T21:15:06+00:00"
    }];
    SetMap(data);
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function SetMap(json) {
  var dataSet = [];
    for (i = 0; i < json.length; i++) {
      dataSet.push( {'id': json[i].country, 'value': json[i].cases.total} );
    }


  var map = anychart.map();
  map.geoData(anychart.maps.world);

  // set the series
  var series = map.choropleth(dataSet);

  // disable labels
  series.labels(true);

  // set the container
  map.container('container');
  map.draw();
};
