var typefaceElement = document.querySelector("#typeface");
var containerClassElement = document.querySelector(".container");

typefaceElement.addEventListener("change", function (event) {
    event.preventDefault();

    var typeface = typefaceElement.value;
    containerClassElement.setAttribute("style", "font-family: " + typeface);
});

var clearButtonElement = document.querySelector("#clear");

var elementsDiv = document.querySelector(".elements");
var elementsChildrenArr = elementsDiv.children;

clearButtonElement.addEventListener("click", function (event) {
    event.preventDefault();

    // var elementsDiv = document.querySelector(".elements");
    // var elementsChildrenArr = elementsDiv.children;

    for (var i = 0; i < elementsChildrenArr.length; i++) {
        elementsChildrenArr[i].textContent = "";
    }
    
    textAreaElement.value = "";
});

var textAreaElement = document.querySelector("#textarea");

textAreaElement.addEventListener("keydown", function (event) {
    console.log(event.key);

    for (var i = 0; i < elementsChildrenArr.length; i++) {
        elementsChildrenArr[i].textContent += event.key;
    }
});
