"use client";

import React, { useState } from "react";
import { addTodo } from "@/app/hooks/TaskManager";

export const ToDoForm: React.FC = () => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    try {
      const newTodo = await addTodo(taskText);
      console.log("Task added:", newTodo);
      setTaskText("");
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
        className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};
