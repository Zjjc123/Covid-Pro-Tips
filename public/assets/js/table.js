var xmlhttp = new XMLHttpRequest();
var url = "https://www.webcovid-19.live/all";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var parsed = JSON.parse(this.responseText);
    SetTable(parsed);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function SetTable(parsed)
{
    var txt = ""
    txt += "<table border='1'>"
    for (i = 0; i < parsed.length; i++){
        console.log(parsed[i].cases)
      txt += "<tr><td>" + parsed[i].country + "</td><td>" + parsed[i].cases.total + "</td><td>" + parsed[i].cases.active + "</td><td>" + parsed[i].cases.critical + "</td><td>"  + parsed[i].cases.new + "</td><td>" + parsed[i].deaths.total + "</td></tr>";
    }
    txt += "</table>"
    document.getElementById("tableBody").innerHTML = txt;
}

