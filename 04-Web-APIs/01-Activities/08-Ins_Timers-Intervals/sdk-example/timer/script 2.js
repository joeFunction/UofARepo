/* 
    setTimeout is a function that is part of window object like alert, confirm, and prompt.
    setTimeout function requires two arguments.
    the first argument is function.
        this function has no parameters.
        this function is known as a callback function.
    the second argument is a number.
        the number signifies the time in milliseconds
    setTimeout function returns a number.
 */
/* 
// Timeout
function doThisWhenTimeout() {
    console.log("Timeout happened!");
};

var timeoutId = setTimeout(doThisWhenTimeout, 5000);

clearTimeout(timeoutId);

// Interval
function doThisWhenInterval() {
    console.log("This will be called after every interval");
};

setInterval(doThisWhenInterval, 1000);
 */

var timeElement = document.querySelector(".time");

var secondsRemaining = 5;

var intervalId = setInterval(function () {
    secondsRemaining--;
    timeElement.textContent = secondsRemaining + " seconds remaining";

    if (secondsRemaining === 0) {
        clearInterval(intervalId);

        var mainDiv = document.querySelector("#main");

        var imgElement = document.createElement("img");
        imgElement.setAttribute("src", "http://placekitten.com/500/500");
        mainDiv.appendChild(imgElement);
    }
}, 1000);
