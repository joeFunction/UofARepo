$(document).ready(function () {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    // 1. Create a for-loop to iterate through the letters array.

    // Inside the loop...

    // 2. Create a variable named "letterBtn" equal to $("<button>");

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".

    // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"

    // 5. Then give each "letterBtn" a text equal to "letters[i]".

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).

    // Be sure to test that your code works for this major task, before proceeding to the next one!

    // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
    // =================================================================================

    // 7. Create an "on-click" event attached to the ".letter-button" class.

    // Inside the on-click event...

    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.

    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".

    // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
    // event.target
    // bubbling events.
    // delegate events.

    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);

    // Be sure to test that your code works for this major task, before proceeding to the next one!

    // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
    // =================================================================================

    // 12. Create an "on-click" event attached to the "#clear" button id.

    // Inside the on-click event...

    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.

});