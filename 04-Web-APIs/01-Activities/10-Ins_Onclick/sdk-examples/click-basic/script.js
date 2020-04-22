var buttonElement = document.querySelector("#click-button");
var h1Element = document.querySelector("#click-h1");
/* 
    addEventListener is a function that will listen to events.
    It requires two arguments.
    The first argument is a string.
        This argument represents the type of event.
    The second argument is a callback function with one optional parameter.
 */
buttonElement.addEventListener("click", function () {
    alert("You clicked the button!!!");
});

h1Element.addEventListener("click", function () {
    alert("You clicked h1!!!");
});