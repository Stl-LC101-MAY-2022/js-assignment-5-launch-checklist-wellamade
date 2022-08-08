// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

   let missionTargetDiv = document.getElementById("missionTarget");
   missionTargetDiv.innerHTML = `
            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`

}

function validateInput(testInput) {
   
    if(testInput === '') {
    return "Empty";
    }
    else if(isNaN(testInput)) {
    return "Not a Number";
    }
    else if(isNaN(testInput) === "false") {
    return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let launchStatusDiv = document.getElementById("launchStatus");
    let pilotStatusDiv = document.getElementById("pilotStatus");
    let copilotStatusDiv = document.getElementById("copilotStatus");
    let fuelStatusDiv = document.getElementById("fuelStatus");
    let cargoStatusDiv = document.getElementById("cargoStatus");
    
    
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty" ){
        alert("All fields required");
    }

    else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number"|| validateInput(cargoMass) === "Not a Number" ){
        alert("Invalid Input");   
    }
    
    else { 
        list.style.visibility = "visible";
        pilotStatusDiv.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatusDiv.innerHTML = `Co-pilot ${copilot} is is ready for launch`;

        if (fuelLevel < 10000 && cargoMass > 10000){
            launchStatusDiv.innerHTML = "Shuttle not ready for launch";
            launchStatusDiv.style.color = "red";
            fuelStatusDiv.innerHTML = "Fuel level too low for launch"
            cargoStatusDiv.innerHTML = "Cargo mass is too high for launch"
        }

        else if (fuelLevel < 10000  && cargoMass <= 10000){
            launchStatusDiv.innerHTML = "Shuttle not ready for launch";
            launchStatusDiv.style.color = "red";
            fuelStatusDiv.innerHTML = "Fuel level too low for launch"
            }

        else if (cargoMass > 10000 && fuelLevel >= 10000){
            launchStatusDiv.innerHTML = "Shuttle not ready for launch"
            launchStatusDiv.style.color = "red";
            cargoStatusDiv.innerHTML = "Cargo mass is too high for launch"
        }

        else {
            launchStatusDiv.innerHTML = "Shuttle is ready for launch"
            launchStatusDiv.style.color = "green";
        }
    }




}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
    return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports = {
    addDestinationInfo : addDestinationInfo,
    validateInput : validateInput,
    formSubmission : formSubmission,
    pickPlanet : pickPlanet,
    myFetch : myFetch
}
