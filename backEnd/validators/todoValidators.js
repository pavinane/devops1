const {body} = require("express-validator");

exports.createTodoValidator = [
    body("title")
    .notEmpty()
    .withMessage("Title is required")
    .bail()
    .isLength({min:3})
    .withMessage("Title must be 3 character")
]