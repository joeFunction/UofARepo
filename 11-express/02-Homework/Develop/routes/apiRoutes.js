// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var fs = require("fs")
var notes = require("../db/db.json");
console.log("notes:", notes)
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
    console.log("GET")
    res.json(notes);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------



  // var arr = [a,b,c,d,e]  ==   length = 5
  app.post("/api/notes", function (req, res) {
    console.log("POST: " ,req.body)
    var newNote = req.body
    var lastNote = notes[notes.length-1]
    var newId = lastNote.id+1;
    newNote.id = newId
    notes.push(newNote)
    // we save the info in the db.json file
    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      console.log(err)
      res.json("done")
    })

  });


  app.delete("/api/notes/:id", function (req, res) {
    console.log("DELETE: ", req.params)

    // array of notes and we nned to eliminata the one that the id = the id comming in the req.params
    var newNotes = []
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id !== parseInt(req.params.id)) {
        newNotes.push(notes[i])
      }
    }
    console.log(newNotes)
    notes = newNotes

    // we save the info in the db.json file
    fs.writeFile("./db/db.json", JSON.stringify(notes),function(err){
      console.log(err)
      res.json("done")
    })

  });
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!


};
