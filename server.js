const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  

module.exports = db;