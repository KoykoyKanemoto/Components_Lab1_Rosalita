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

// import React, { useState } from "react";

// interface item {
//     id: number;
//     text: string;
//     completed: boolean;
// }

// export const ToDoList: React.FC = () => {
//     const [todos, setTodos] = useState<item[]>([
//         // {id: 1, text: "ride on a horse with a cowboy hat", completed: false},
//         // {id: 2, text: "win a grammy", completed: false},
//     ]);
//     const [input, setInput] = useState<string>("");

//     const handleToggle = (id: number) => {
//         setTodos(
//             todos.map((todo) => {
//                 if (todo.id === id) {
//                     return { ...todo, completed: !todo.completed};
//                 }
//                 return todo;
//             }));
//     };

//     const handleClick = () => {
//         const newTodo: item = {id: Date.now(), text: input, completed:false}
//         setTodos([...todos, newTodo]);
//     };

//     return (
//         <div className="main-container">
//             <h1>To-Do List</h1>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
//                         {todo.text}
//                     </li>
//                 ))}
//             </ul>
//             <input 
//                 type="text" 
//                 placeholder="Add you to-do here" 
//                 onChange={(e) => setInput(e.currentTarget.value)}
//                 />
//             <button onClick={handleClick}>Add</button>
//         </div>
//     );
// };