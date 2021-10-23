const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    // db.Workout.find({}).then(function(dbWorkout) {
    //   res.json(dbWorkout);
    // });
    res.send('Route Gotten')
  });

  app.put("/api/workouts/:id", function(req, res) {
    // db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
    //   res.json(dbImage);
    // });
    res.send("Info put correctly")
  });

  app.post("/api/workouts", function(req, res) {
      res.send("Info posted here")
  })

  app.get("/api/workouts/range", function(req, res) {
      res.send("Info Range Listed Here")
  })
};