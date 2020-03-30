var xmlhttp = new XMLHttpRequest();
var url = "https://www.webcovid-19.live/data";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var parsed = JSON.parse(this.responseText);
        SetText(parsed);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function SetText(json) {
    console.log(json);
    document.getElementById("GlobalCases").innerHTML = json[0].GlobalCases;
    document.getElementById("GlobalRecovered").innerHTML = json[0].GlobalRecovered;
    document.getElementById("GlobalNew").innerHTML = json[0].GlobalNew;
    document.getElementById("GlobalDeath").innerHTML = json[0].GlobalDeath;

    document.getElementById("USACases").innerHTML = json[0].USACases;
    document.getElementById("USARecovered").innerHTML = json[0].USARecovered;
    document.getElementById("USANew").innerHTML = json[0].USANew;
    document.getElementById("USADeath").innerHTML = json[0].USADeath;
}