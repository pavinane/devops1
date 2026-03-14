const Todo = require("../models/todoModels");
const {validationResult} = require("express-validator");


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
