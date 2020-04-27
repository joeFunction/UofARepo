var imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", function (event) {
  var element = event.target;

  var state = element.getAttribute("data-state");

  if (state === "still") {
    element.setAttribute("data-state", "animate");
    element.setAttribute("src", element.getAttribute("data-animate"));
  } else if (state === "animate") {
    element.setAttribute("data-state", "still");
    element.setAttribute("src", element.getAttribute("data-still"));
  }
});
