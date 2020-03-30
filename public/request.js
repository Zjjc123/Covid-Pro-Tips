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
}