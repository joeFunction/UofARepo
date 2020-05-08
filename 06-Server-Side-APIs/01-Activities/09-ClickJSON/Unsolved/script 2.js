$(document).ready(function () {
    // Initial array of movies
    var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

    // Function for dumping the JSON content for each button into the div
    function displayMovieInfo() {

        // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.

    }

    // Function for displaying movie data
    function renderButtons() {

        // Deleting the buttons prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of movie to our button
            a.addClass("movie");
            // Adding a data-attribute
            a.attr("data-name", movies[i]);
            // Providing the initial button text
            a.text(movies[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }

    // This function handles events where one button is clicked
    $("#add-movie").on("click", function (event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // The movie from the textbox is then added to our array
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

    });

    // Generic function for displaying the movieInfo
    $(document).on("click", ".movie", displayMovieInfo);

    // Calling the renderButtons function to display the initial buttons
    renderButtons();
});