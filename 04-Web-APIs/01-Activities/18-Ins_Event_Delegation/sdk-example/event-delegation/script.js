/* 
var liOne = document.querySelector("#one");

liOne.addEventListener("click", function () {
    liOne.setAttribute("class", "completed");
});

var liTwo = document.querySelector("#two");

liTwo.addEventListener("click", function () {
    // liTwo.setAttribute("class", "completed");
    liTwo.classList.toggle("completed");
});
 */


var ulElement = document.querySelector(".list");

ulElement.addEventListener("click", function (event) {
    console.log(event.target);

    // event.target.setAttribute("class", "completed");

    event.target.classList.toggle("completed");
});
