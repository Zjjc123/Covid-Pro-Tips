var xmlhttp = new XMLHttpRequest();
var url = "https://www.webcovid-19.live/all";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var parsed = JSON.parse(this.responseText);
        SetMap(parsed);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function SetMap(json) {
  var dataSet = [];
    // for (i = 0; i < json.length; i++) {
    //     dataSet.push( {'id': json[i].country, 'value': json[i].cases.total} );
    // }

  //
  var map = anychart.map();
  map.geoData(anychart.maps.world);

  // set the series
  var series = map.choropleth(dataSet);

  // disable labels
  series.labels(false);

  // set the container
  map.container('container');
  map.draw();
});
