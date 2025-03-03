import React, { useState } from "react";

interface Item {
    id: number;
    text: string;
    completed: boolean;
}

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
        if (!input.trim()) return; // Prevent empty tasks
        onAdd(input);
        setInput(""); // Clear input after adding
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

    const handleToggle = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const handleAdd = (text: string) => {
        const newTodo: Item = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
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