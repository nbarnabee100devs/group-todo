const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, todosController.getTodos);

router.post("/createTodo", todosController.createTodo);

router.get("/search/:searchParam", todosController.searchTodo);

router.put("/updateTodo", todosController.updateTodo);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
