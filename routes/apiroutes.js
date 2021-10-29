const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    console.log("Get Route", req.body)
    db.Workout.find({}).then(function(dbWorkouts) {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    // res.send("Info posted here")
  });

  app.post("/api/workouts", function(req, res) {
    console.log("Post Route", req.body)
    db.Workout.create({}).then(function(newWorkout) {
      console.log(newWorkout);
      res.json(newWorkout);
    })
    // res.send("Info posted here")
  });

  app.put("/api/workouts/:id", function(req, res) {
    console.log("Put Route", req.body, req.params.id)
    db.Workout.findOneAndUpdate({ _id: req.params.id }, {$push: { exercises:req.body }}).then(function(upWorkout) {
      console.log(upWorkout);
      res.json(upWorkout);
    });
    // res.send("Info put correctly")
  });

  app.get("/api/workouts/range", function(req, res) {
    console.log("Get Range Route", req.body)
    db.Workout.aggregate( [
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      },
   ] ).then(function(rangeWorkout) {
     console.log("Range", rangeWorkout)
     res.json(rangeWorkout)
   })
   })
};