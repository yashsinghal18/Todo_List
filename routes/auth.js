const router = require("express").Router()
const User = require("../models/User");
const Todo=require("../models/Todo")

router
.get('/login', (req, res) => {
    res.render('login');
  })
.get('/register', (req, res) => {
    res.render('register');
  })
.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      router.get("/",async(req, res) => {
        const allTodo = await Todo.find();
        res.render("index", {todo: allTodo})
      })
      router.get("/alltodo",async(req,res)=>{
        const allTodo = await Todo.find();
        res.render("allTodos", {todo: allTodo})
      })
      res.redirect("/");
    } else {
        res.redirect("/register");
    }
  })
.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = new User({ username, password });
      await user.save();
      res.redirect("/login");
    } catch (error) {
      res.status(500).send('Error registering user');
    }
  });  



module.exports = router;