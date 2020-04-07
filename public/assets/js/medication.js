function returnIP(){

            //GET RXCUIS ID
            var x2 = document.getElementById("frm1");
            var drugOne = document.getElementById("dOne").value;                    
            var drugTwo = document.getElementById("dTwo").value;
            var mgOne = document.getElementById("mgOne").value;
            var mgTwo = document.getElementById("mgTwo").value;
            var string;
            
            var xhrTwo = new XMLHttpRequest();

            // var basicURL = "https://rxnav.nlm.nih.gov/REST/rxcui.json?name=Advil+200+mg+Tab&search=1"
            var basicURL = "https://rxnav.nlm.nih.gov/REST/rxcui.json?name="
            var finalURL = basicURL + drugOne + "+" + mgOne+ "+mg+Tab&search=1"
            
            xhrTwo.open('GET', finalURL, true);
            xhrTwo.send();
            xhrTwo.onreadystatechange = setTimeout(getID, 1000);
            var idOne;

            function getID() {
                if (xhrTwo.readyState == 4 && xhrTwo.status == 200) {
                    var response = xhrTwo.response;
                    const parsedResponse = JSON.parse(response);

                    // document.getElementById("Result").innerHTML = (parsedResponse);
                    idOne = (JSON.stringify(parsedResponse.idGroup.rxnormId));
                    // alert(idOne.substring(2, 8));
                }
                else{
                    document.getElementById("Result").innerHTML = xhrTwo.status + " " + xhrTwo.readyState;
                }
            }

            //ID RECIEVED AND STORED FOR ONE, SECOND ONE BELOW:
            
            var xhrThree = new XMLHttpRequest();
                var finalURLTwo = basicURL + drugTwo + "+" + mgTwo + "+mg+Tab&search=1"

                xhrThree.open('GET', finalURLTwo, true);
                xhrThree.send();
                xhrThree.onreadystatechange = setTimeout(getIDTwo, 1100);
                var idTwo;

                function getIDTwo() {
                    if (xhrThree.readyState == 4 && xhrThree.status == 200) {
                        var response = xhrThree.response;
                        const parsedResponse = JSON.parse(response);

                        // document.getElementById("Result").innerHTML = (parsedResponse);
                        idTwo = (JSON.stringify(parsedResponse.idGroup.rxnormId));
                        string = (idTwo.substring(2, 8) + "+" + idOne.substring(2,8));

                        var xhrFinal = new XMLHttpRequest();
                        var finalReq = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=" + string;
                        xhrFinal.open('GET', finalReq, true);
                        xhrFinal.send();
                        xhrFinal.onreadystatechange = setTimeout(displayPrint, 1000);

                        function displayPrint() {
                            if (xhrFinal.readyState == 4 && xhrFinal.status == 200) {
                                var response = xhrFinal.response;
                                const parsedResponse = JSON.parse(response);
                            // document.getElementById("Result").innerHTML = response + "Success!";
                            // document.getElementById("Result").innerHTML = "Success!"
                                if (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity) == ("\"N/A\"")){
                                    document.getElementById("Result").innerHTML = "Safe to take together!";
                                    document.getElementById("NextLine").innerHTML = "Description of Interaction: " + (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description));
                                }
                                else{
                                    document.getElementById("Result").innerHTML = "Severity of the interaction is: " + (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity));
                                    document.getElementById("NextLine").innerHTML = "Description of Interaction: " + (JSON.stringify(parsedResponse.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description));
                                }
                            }
                            else{
                                document.getElementById("Result").innerHTML = xhr.status + " " + xhr.readyState;
                            }
                        }
                        
                    }
                    else{
                        document.getElementById("Result").innerHTML = xhrThree.status + " " + xhrThree.readyState;
                    }

                }
    

}