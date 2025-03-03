import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let todos = [{ id: 1, name: "Sample Task", completed: false }];

app.get("/api/todos", (req, res) => res.json(todos));

app.post("/api/todos", (req, res) => {
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.put("/api/todos/:id", (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;
    
    todos = todos.map((todo) => (todo.id == id ? updatedTodo : todo));
    
    res.json(updatedTodo);
});