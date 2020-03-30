var xmlhttp = new XMLHttpRequest();
var url = "https://www.webcovid-19.live/data";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(json) {
    document.getElementById("GlobalCase").innerHTML = json[0].GlobalCases;
}