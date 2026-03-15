const Todo = require("../models/todoModels");
const {validationResult} = require("express-validator");
const mongoose = require("mongoose");

exports.createTodo = async (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json(
            {errors:errors.array()}
        );
    }
    try{
        const todo = new Todo(req.body);
        const saveTodo = await todo.save();
        res.status(201).json(saveTodo);

    }catch(error){
        res.status(500).json({message:error.message})

    }
}

exports.getTodos = async(req,res) =>{
    try {
        const todoList = await Todo.find();

        res.status(200).json(todoList);
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}





exports.getTodoById = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid Todo ID" });
    }

    const todo = await Todo.findById(req.params.id);
  

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};