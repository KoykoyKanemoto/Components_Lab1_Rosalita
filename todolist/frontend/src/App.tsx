import { useEffect, useState } from "react";
import { fetchTodos, addTodo } from "./api";

type Todo = { id: number; name: string; completed: boolean };

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    if (!newTask.trim()) return;
    const newTodo = await addTodo(newTask);
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  return (
    <div>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
