import React, { useState, useEffect } from "react";
// import axios from "axios";

interface Employee {
    id: number;
    name: string;
    role: string;
    salary: number;
}

const EmployeeItem: React.FC<{ EmployeeProps }> = ({ }) => {
    return (
        <li 
            // key={todo.id} 
            // onClick={() => onToggle(todo.id)} 
            // style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        >
            {/* {todo.text} */}
        </li>
    );
};

const EmployeeInput: React.FC<{ onAdd: (text: string) => void }> = ({ ...}) => {
    const [input, setInput] = useState<string>("");

    const handleSubmit = () => {
        // if (!input.trim()) return;
        // onAdd(input);
        // setInput("");
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add new Employee here" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default EmployeeItem


// Entry Level
// ------------------------------------------------
// Name          | Role          |  Salary        |
// ------------------------------------------------
// JP            | Dev           | 30,000         |
// Joshua        | Dev           | 40,000         |


// Senior
// ------------------------------------------------
// Name          | Role          |  Salary        |
// ------------------------------------------------
// Wendzzz       | CEO           | 90,000         |
// Sheena        | Subordinate   | 150,000        |
