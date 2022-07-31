// Write your JavaScript code here!

//1. Use preventDefault() to prevent a request from being sent out and the page reloading.

//      Prevent Form Submission
//We should prevent the form submission from happening until all inputs have valid values. We can use the event parameter and event.preventDefault() to stop the form submission. event.preventDefault() prevents default browser functionality from happening, like form submission when <button> tags are clicked inside of a form. Remember that event handler functions are passed an event argument which represents the event that the handler is responding to.

    // EXAMPLE
    // window.addEventListener("load", function() {
    //  let form = document.querySelector("form"); 
    //  form.addEventListener("submit", function(event) {
    //     let usernameInput = document.querySelector("input[name=username]");
    //     let teamName = document.querySelector("input[name=team]");
    //     if (usernameInput.value === "" || teamName.value === "") {
    //        alert("All fields are required!");
    //        // stop the form submission
    //        event.preventDefault();



//2. Validate the user-submitted data to ensure the following:
//  a. The user entered something for every field.
//  b. The user entered text for names and numbers for fuel and cargo levels.

    // Steps to Add Validation¶
    //      1. Add an event handler for the window load event
               //window.addEventListener("load", function()
    //      2. Within the window's load handler, add an event handler for the form submit event
               //form.addEventListener("submit", function(event) {
              //    alert("submit clicked")
    //      3. Retrieve input values that need to be validated from the DOM.
               //let usernameInput = document.querySelector("input[name=username]");
                //let teamName = document.querySelector("input[name=team]");
                //if (usernameInput.value === "" || teamName.value === "") {
                //    alert("All fields are required!");
    //      4. Within the form's submit handler, check the input values using conditional statements
    //          a. If the values are valid, allow the form submission
    //          b. If the values are NOT valid, inform the user and STOP form submission
                //event.preventDefault();

//3. With validation, update a list of what is currently ready or not ready for the shuttle launch.

    // The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch. Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.

    // If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.

    // If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.

    // If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".

//4. Indicate what is good or bad about the shuttle and whether it is ready for launch by using the DOM to update the CSS.

//5. Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed.

    //In scriptHelper.js, you have three functions for this task: myFetch(), pickPlanet(), and addDestinationInfo(). First, review the comments in addDestinationInfo(). This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo(). addDestinationInfo() does not need to return anything. pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index. myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().

    // Now it is time to make use of these helper functions in script.js. We provided some of the code necessary:

        // let listedPlanets;
             // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        // let listedPlanetsResponse;
        // listedPlanetsResponse.then(function (result) {
        //     listedPlanets = result;
        //     console.log(listedPlanets);
        // }).then(function () {
        //     console.log(listedPlanets);
        //     Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // })

    // First, do as the comments in the code tell you and set listedPlanetsResponse equal to the value returned when calling myFetch(). This value is going to be a promise. If we head to our browser and open up our developer tools, we can now see a list of the planets. Then using pickPlanet() and addDestinationInfo(), select a planet at random from listedPlanets and pass that information to addDestinationInfo(). Reload your page and check out your site to see the mission target information.

window.addEventListener("load", function() {

    // let form = document.querySelector("form"); 
    //  form.addEventListener("submit", function(event) {
    //     let pilotInput = document.querySelector("input[name=pilotname]");
    //     let copilotInput = document.querySelector("input[name=copilotname]");
    //     if (pilotInput.value === "" || copilotInput.value === "") {
    //        alert("All fields are required!");
    //        // stop the form submission
    //        event.preventDefault();
    //     }});

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});