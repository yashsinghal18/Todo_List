const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/edit/todo/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const todo = await Todo.findById(_id);
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        res.render("editTodo", { todo });
    } catch (error) {
        console.error("Error fetching todo:", error);
        res.status(500).send("Error fetching todo");
    }
});

router.post("/edit/todo/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { todo, dueDate } = req.body;

        await Todo.findByIdAndUpdate(_id, { todo, dueDate });

        res.redirect("/alltodo");
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).send("Error updating todo");
    }
});

module.exports = router;
