var db = require ("../models")
var mongoose = require ("mongoose")
function apiRoutes(app) {
  app.get("/api/workouts", function(req,res){
    db.Workout.find().then(function(results){
      res.json(results)
    })
  })

  app.post("/api/workouts", function(req, res){
    db.Workout.create(req.body).then(function (results) {
      res.json(results)
    })
  })

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.findOneAndUpdate({
      _id: mongoose.Types.ObjectId(req.params.id)
    }, {
      $push: {
        exercises: req.body
      }
    }, function (error, success) {
      res.json(success)
    }
    )
  })

  app.get("/api/workouts/range", function(req, res) {
     db.Workout.find().then(function (results) {
       res.json(results)
     })
  })
}

module.exports = apiRoutes