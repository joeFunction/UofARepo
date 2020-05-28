$(document).ready(function () {
    $("#createplan").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // [name=plan] will find an element with a "name" attribute equal to the string "plan"
        let newPlan = {
            plan: $("#create-plan-text").val().trim()
        };

        // Send the POST request.
        $
            .ajax("/api/plans", {
                method: "POST",
                data: newPlan
            })
            .then(function () {
                console.log("created new plan");
                // Reload the page to get the updated list
                location.reload();
            });
    });

    $("#updateplan").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Get the ID by finding an element with a "name" attribute equal to the string "id"
        let id = $("#update-select").val().trim();

        let updatedPlan = {
            plan: $("#update-plan-text").val().trim()
        };

        // Send the PUT request.
        $.ajax("/api/plans/" + id, {
            method: "PUT",
            data: updatedPlan
        }).then(
            function () {
                console.log("updated id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delplan").on("click", function (event) {
        // Get the ID from the button.
        // This is shorthand for $(this).attr("data-planid")
        let id = $(this).data("planid");

        $
            .ajax("/api/plans/" + id, {
                method: "DELETE"
            })
            .then(
                function () {
                    console.log("deleted id ", id);
                    location.reload();
                }
            );
    });
});