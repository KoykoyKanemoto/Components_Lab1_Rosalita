import React, { useState, useEffect } from "react";
import axios from "axios";

interface Item {
    id: number;
    text: string;
    completed: boolean;
}

const API_URL = "http://localhost:5000/api/todos";

const TodoItem: React.FC<{ todo: Item; onToggle: (id: number) => void }> = ({ todo, onToggle }) => {
    return (
        <li 
            key={todo.id} 
            onClick={() => onToggle(todo.id)} 
            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        >
            {todo.text}
        </li>
    );
};

const TodoInput: React.FC<{ onAdd: (text: string) => void }> = ({ onAdd }) => {
    const [input, setInput] = useState<string>("");

    const handleSubmit = () => {
        if (!input.trim()) return;
        onAdd(input);
        setInput("");
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add your to-do here" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<Item[]>([]);

    useEffect(() => {
        axios.get(API_URL)
            .then((res) => setTodos(res.data))
            .catch((err) => console.error("Error fetching todos:", err));
    }, []);

    const handleToggle = async (id: number) => {
        try {
            const todo = todos.find((t) => t.id === id);
            if (!todo) return;

            const updatedTodo = { ...todo, completed: !todo.completed };
            await axios.put(`${API_URL}/${id}`, updatedTodo);

            setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const handleAdd = async (text: string) => {
        if (!text.trim()) return;
        try {
            const res = await axios.post(API_URL, { text, completed: false });
            setTodos([...todos, res.data]);
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    return (
        <div className="main-container">
            <h1>To-Do List</h1>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
                ))}
            </ul>
            <TodoInput onAdd={handleAdd} />
        </div>
    );
};
