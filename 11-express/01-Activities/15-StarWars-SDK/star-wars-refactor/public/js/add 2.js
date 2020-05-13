$(document).ready(function () {
    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        
        let newCharacter = {
            name: $("#name").val().trim(),
            role: $("#role").val().trim(),
            age: $("#age").val().trim(),
            house: $("#affiliation").val().trim()
        };

        $
            .post("/api/characters", newCharacter)
            .then(function (data) {
                console.log(data);
                alert("Adding character...");
            });
    });
});