$(document).ready(function () {
    $("#search-btn").on("click", function () {
        const searchedCharacter = $("#character-search").val().trim().toLowerCase();

        $.get(`/api/characters/${searchedCharacter}`, function (data) {
            console.log(data);

            if (data) {
                $("#stats").show();
                $("#name").text(data.name);
                $("#role").text(data.role);
                $("#age").text(data.age);
                $("#affiliation").text(data.affiliation);
            }
            else {
                $("#name").text("The force is not strong enough...");
                $("#stats").hide();
            }
        });
    });
});