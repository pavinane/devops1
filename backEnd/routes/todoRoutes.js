const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController.js");
const {createTodoValidator} = require("../validators/todoValidators.js");

router.post("/",createTodoValidator,todoController?.createTodo)



module.exports = router;