const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Mongoose 6.0 thinks these are true and does not want them included
    // useCreateIndex: true,
    // useFindAndModify: false
 });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});