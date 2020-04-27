var counterSpanElement = document.querySelector("#counter");
var incButtonElement = document.querySelector("#inc");
var decButtonElement = document.querySelector("#dec");

var count = localStorage.getItem("count");

counter.textContent = count;

incButtonElement.addEventListener("click", function () {
    count++;
    counter.textContent = count;

    localStorage.setItem("count", count);
});


decButtonElement.addEventListener("click", function () {
    count--;
    counter.textContent = count;

    localStorage.setItem("count", count);
});