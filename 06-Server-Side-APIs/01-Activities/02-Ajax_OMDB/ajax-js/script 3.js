const url = "https://www.omdbapi.com/?t=inception&y=&plot=short&apikey=trilogy";

//Special function 
//Constructor function
let xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

//To add a event listener for the data

xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);

        console.log(data);
        console.log(data.Title);
    }
});
