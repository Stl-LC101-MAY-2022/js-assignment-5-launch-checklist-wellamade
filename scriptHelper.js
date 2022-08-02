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
   let missionTargetDiv = document.getElementById("missionTarget");
   missionTargetDiv.innerHTML = `
            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json.name}</li>
                    <li>Diameter: ${json.diameter}</li>
                    <li>Star: ${json.star}</li>
                    <li>Distance from Earth: ${json.distance}</li>
                    <li>Number of Moons: ${json.moons}</li>
                </ol>
                <img src="${json.image}">`

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
    let launchStatusDiv = document.getElementById("launchStatus");
    let pilotStatusDiv = document.getElementById("pilotStatus");
    let copilotStatusDiv = document.getElementById("copilotStatus");
    let fuelStatusDiv = document.getElementById("fuelStatus");
    let cargoStatusDiv = document.getElementById("cargoStatus");
    let faultyItemsDiv =  document.getElementById("faultyItems");

   if(validateInput(pilot) != "Not a Number"){
    alert("Pilot name required");
    launchStatusDiv.innerHTML = "Shuttle not ready for launch"
    launchStatusDiv.style.color = "red";
    pilotStatusDiv.innerHTML = `Pilot is not ready for launch`;
    faultyItemsDiv.style.visiblity = "visible";
   }

   else if(validateInput(copilot) != "Not a Number"){
    alert("Co-Pilot Name required");
    launchStatusDiv.innerHTML = "Shuttle not ready for launch"
    launchStatusDiv.style.color = "red";
    copilotStatusDiv.innerHTML = `Co-pilot is not ready for launch`;
    faultyItemsDiv.style.visiblity = "visible";
   }

   else if (validateInput(fuelLevel) != "Is a Number"){
    alert("Fuel Level is required as a number");
    launchStatusDiv.innerHTML = "Shuttle not ready for launch"
    launchStatusDiv.style.color = "red";
    fuelStatusDiv.innerHTML = "Fuel level unknown"
    faultyItemsDiv.style.visiblity = "visible";
   }

   else if (fuelLevel < 10000){
    fuelStatusDiv.innerHTML = "Fuel level too low for launch"
    faultyItemsDiv.style.visiblity = "visible";
    }

   else if (fuelLevel >= 10000){
    faultyItemsDiv.style.visiblity = "visible";
    }

   else if (validateInput(cargoLevel) != "Is a Number"){
    alert("Cargo mass is required as a number");
    launchStatusDiv.innerHTML = "Shuttle not ready for launch"
    launchStatusDiv.style.color = "red";
    cargoStatusDiv.innerHTML = "Cargo mass unknown"
    faultyItemsDiv.style.visiblity = "visible";
    }

   else if (cargoLevel > 10000){
    launchStatusDiv.innerHTML = "Shuttle not ready for launch"
    launchStatusDiv.style.color = "red";
    cargoStatusDiv.innerHTML = "Cargo mass is too high for launch"
    faultyItemsDiv.style.visiblity = "visible";
    }
 
   else if (cargoLevel <= 10000){
    faultyItemsDiv.style.visiblity = "visible";
    }

   else {
    launchStatusDiv.innerHTML = "Shuttle is ready for launch"
    launchStatusDiv.style.color = "green";
    faultyItemsDiv.style.visiblity = "visible";
    pilotStatusDiv.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatusDiv.innerHTML = `Co-pilot ${copilot} is is ready for launch`;
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    function randomSelection(arr){
        let index = Math.floor(Math.random()*planets.length);
        return arr[index];
    }

    for(i=0; i < planets.length; i++){
        console.log(randomSelection(planets))
    }
}

module.exports = {
    addDestinationInfo : addDestinationInfo,
    validateInput : validateInput,
    formSubmission : formSubmission,
    pickPlanet : pickPlanet,
    myFetch : myFetch,
}
