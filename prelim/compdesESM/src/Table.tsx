import React, { useState, useEffect } from "react";

interface Employee {
    id: number;
    name: string;
    role: string;
    salary: number;
}

const EmployeeItem: React.FC<{ todo: Employee; onToggle: (id: number) => void }> = ({ todo, onToggle }) => {
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
