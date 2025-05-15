"use client";

import React, { useState } from "react";
import { addTodo } from "@/app/hooks/TaskManager";
import { Todos } from "@/types/todos.types";

interface ToDoFormProps {
  onAdd: (todo: Todos) => void;
}

export const ToDoForm: React.FC<ToDoFormProps> = ({ onAdd }) => {
  const [taskText, setTaskText] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    try {
      const newTodo = await addTodo(taskText, deadline);
      if (newTodo && newTodo.length > 0) {
        onAdd(newTodo);
      }
      setTaskText("");
      setDeadline("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2">
      <input
        id="task-input"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Input your task :)"
        className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f9da0d]"
      />
      <input 
        type="date"
        onChange={(e) => setDeadline(e.target.value)}
        className="scheme-dark flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f9da0d]"/>
      <button
        type="submit"
        className="px-4 py-2 bg-[#0a54c4] text-white rounded-lg hover:bg-[#ab045e] hover:scale-110 transition-all cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};
