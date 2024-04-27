const router = require("express").Router();
const Todo = require("../models/Todo");
const User = require("../models/User");

router
  .post("/add/todo", (req, res) => {
    let { todo,dueDate } = req.body;
    const newTodo = new Todo({ todo,dueDate });

    newTodo
      .save()
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })


  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/alltodo");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;