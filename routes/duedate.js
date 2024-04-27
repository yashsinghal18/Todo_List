const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/todos-on-date", async (req, res) => {
    try {
        const dueDate = req.query['todo-dueDate'];
        const tasksDueOnDate = await Todo.find({ dueDate: dueDate });

        res.render("tasks-due-on-date", { tasks: tasksDueOnDate, dueDate });

    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
