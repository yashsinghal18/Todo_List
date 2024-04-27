const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/auth"))
app.use(require("./routes/todo"))
app.use(require("./routes/edit"))
app.use(require("./routes/duedate"))


app.listen(3000, () => console.log("Server started listening on port: 3000"));
