var idOne;
var idTwo;

var basicURL = "https://rxnav.nlm.nih.gov/REST/rxcui.json?name="

var x2;
var drugOne;
var drugTwo;
var mgOne;
var mgTwo;


var string;

function returnIP() {

    //GET RXCUIS ID
    x2 = document.getElementById("frm1");
    drugOne = document.getElementById("dOne").value;
    drugTwo = document.getElementById("dTwo").value;
    mgOne = document.getElementById("mgOne").value;
    mgTwo = document.getElementById("mgTwo").value;


    var xhrTwo = new XMLHttpRequest();
    
    var finalURL = basicURL + drugOne + "+" + mgOne + "+mg+Tab&search=1";
    
    xhrTwo.open('GET', finalURL, true);
    xhrTwo.send();
    xhrTwo.onreadystatechange = getIDs;
    //xhrTwo.addEventListener("load", getIDs);
}


function getIDs() {
    if (this.readyState == 4 && this.status == 200) {
        var response = this.response;
        const parsedResponse = JSON.parse(response);
        
        if (!JSON.stringify(parsedResponse.idGroup).includes('rxnormId')){
            document.getElementById("Result").innerHTML = "The tablet size that you have entered does not exist within our database.  Please enter a valid amount.";
            document.getElementById("NextLine").innerHTML = "";
        }
        else {
// if (JSON.stringify(parsedResponse.idGroup.rxnormId) != -1){
            idOne = (JSON.stringify(parsedResponse.idGroup.rxnormId));

            //ID RECIEVED AND STORED FOR ONE, SECOND ONE BELOW:
            var xhrThree = new XMLHttpRequest();

            var finalURLTwo = basicURL + drugTwo + "+" + mgTwo + "+mg+Tab&search=1"
            xhrThree.open('GET', finalURLTwo, true);
            xhrThree.send();
            xhrThree.onreadystatechange = getIDTwo; 
            // xhrThree.addEventListener("load", getIDTwo);
        }
    }
    else {
        document.getElementById("Result").innerHTML = "Loading...";
    }
}

function getIDTwo(){
    if (this.readyState == 4 && this.status == 200) {
        var response = this.response;
        const parsedResponse = JSON.parse(response);
        
        if (!JSON.stringify(parsedResponse.idGroup).includes('rxnormId')){
            document.getElementById("Result").innerHTML = "The tablet size that you have entered does not exist within our database.  Please enter a valid amount.";
            document.getElementById("NextLine").innerHTML = "";
        }
        else {
// (JSON.stringify(parsedResponse.idGroup.rxnormId) != -1){
            idTwo = (JSON.stringify(parsedResponse.idGroup.rxnormId));
            string = (idTwo.substring(2, 8) + "+" + idOne.substring(2, 8));


            var xhrFinal = new XMLHttpRequest();
            var finalReq = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=" + string;
            xhrFinal.open('GET', finalReq, true);
            xhrFinal.send();
            xhrFinal.onreadystatechange = displayPrint;
            // xhrThree.addEventListener("load", displayPrint);
        }
    }
    else {
        document.getElementById("Result").innerHTML = "Loading...";
    }

}

function displayPrint() {
    if (this.readyState == 4 && this.status == 200) {
        var response = this.response;
        const parsedResponse = JSON.parse(response);

        if (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity) == ("\"N/A\"")) {
            document.getElementById("Result").innerHTML = "Safe to take together!";
            document.getElementById("NextLine").innerHTML = "Description of Interaction: " + (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description));
        }
        else {
            document.getElementById("Result").innerHTML = "Severity of the interaction is: " + (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity));
            document.getElementById("NextLine").innerHTML = "Description of Interaction: " + (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description));
        }
    }
    else {
        document.getElementById("Result").innerHTML = "We're sorry, but we don't have the interaction you have requested in our database.  Please take caution when taking more than one drug.";
    }
}