var buttonElement = document.querySelector(".button");
var innerDivElement = document.querySelector(".inner-div");
var outerDivElement = document.querySelector(".outer-div");

buttonElement.addEventListener("click", function (event) {
    event.stopPropagation();
    alert("Button clicked!!!");
});

innerDivElement.addEventListener("click", function () {
    alert("Inner Div clicked!!!");
});

outerDivElement.addEventListener("click", function () {
    alert("Outer Div clicked!!!");
});