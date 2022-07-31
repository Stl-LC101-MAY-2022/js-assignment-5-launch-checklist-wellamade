// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if(testInput == '') {
    return "Empty";
   }
   else if(isNaN(testInput)) {
    return "Not a Number";
   }
   else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if(validateInput(pilot) != "Not a Number"){
    alert("Pilot name required");
   }
   else if(validateInput(copilot) != "Not a Number"){
    alert("Co-Pilot Name required");
   }
   else if (validateInput(fuelLevel) != "Is a Number"){
    alert("Fuel Level is required as a number");
   }
   else if (validateInput(cargoLevel) != "Is a Number"){
    alert("Cargo Level is required as a number");
   }

   else {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is is ready for launch`;
    let fuelStatusDiv = document.getElementById("fuelStatus");
    if(fuelStatus < 10000){
        fuelStatusDiv.innerHTML = "Fuel level too low for launch"
        document.getElementBtId("faultyItems").style.visiblity = "visible";
    }
    else {
        fuelStatusDiv.innerHTML = "Fu"
    }
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
