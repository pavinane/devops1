const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController.js");
const {createTodoValidator} = require("../validators/todoValidators.js");

router.post("/",createTodoValidator,todoController?.createTodo);

router.get("/",todoController.getTodos);

router.get("/:id",todoController.getTodoById)



module.exports = router;