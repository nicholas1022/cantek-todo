import express from "express";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todo.controllers.js";

const router = express.Router();

// Create a todo
router.post("/", addTodo);
// Get todos
router.get("/", getTodos);
// Update a todo
router.put("/:id", updateTodo);
// Delete a todo
router.delete("/:id", deleteTodo);

export default router;