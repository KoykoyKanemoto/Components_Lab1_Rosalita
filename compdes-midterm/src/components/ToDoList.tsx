"use client";

import React, { useState, useEffect } from "react";
import { fetchTodos } from "@/app/hooks/TaskManager"; // Ensure this is the correct import
import { TodoItem } from "./ToDoItem";
import { ToDoForm } from "./ToDoForm";
import { Todos } from "@/types/todos.types";
import { deleteTodos, handleComplete } from "@/app/hooks/TaskManager";

export const ToDoList: React.FC = () => {
  const addTodoToList = (newTodo: Todos) => {
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleDelete = async (id: string) => {
  try {
    await deleteTodos(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  } catch (error) {
    console.error("Delete error:", error);
  }
};

const handleToggleComplete = async (id: string, is_done: boolean) => {
  try {
    await handleComplete(id, is_done);
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, is_done: !is_done } : todo
      )
    );
  } catch (error) {
    console.error("Complete toggle error:", error);
  }
};

  const [todos, setTodos] = useState<Todos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
        console.log("Fetched todos:", fetchedTodos);
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <h2 className="text-center text-2xl mb-5">Enter a Task</h2>
           <ToDoForm onAdd={addTodoToList} />
        <div className="text-center mt-5">
            {todos.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    deadline={todo.deadline}
                    is_done={todo.is_done}
                    onDelete={() => handleDelete(todo.id)}
                    onComplete={() => handleToggleComplete(todo.id, todo.is_done)}
                />
                ))
            )}
        </div>
    </div>
  );
};


// "use client";

// import React, { useState, useEffect } from "react";
// // import { supabase } from "@/lib/supabaseClient";
// import { deleteTodos, fetchTodos, handleComplete } from "@/app/hooks/TaskManager";
// import { TodoItem } from "./ToDoItem";
// import { ToDoForm } from "./ToDoForm";


// export const ToDoList: React.FC = () => {
//     const [todos, setTodos] = useState<any[]>([]);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const loadData = async () => {
//         try {
//             const data = await fetchTodos();
//             setTodos(data);
//         } catch (err) {
//             setError((err as Error).message);
//         }
//         };

//         loadData();
//     }, []);

//     if (error) {
//         return (
//         <div>
//             <h2 className="text-center text-2xl">Enter New Task</h2>
//             <ToDoForm/>
//             <div>
//                 <p>{error}</p>
//             </div>
//         </div>
//         )
//     }

//     return (
//         <div>
//             <h2 className="text-center text-2xl">Enter New Task</h2>
//             <ToDoForm/>
//             <div>
//                 {todos.map((todo) => (
//                     <TodoItem
//                     key={todo.id}
//                     id={todo.id}
//                     task={todo.task}
//                     is_done={todo.is_done}
//                     deadline={todo.deadline}
//                     onDelete={() => deleteTodos(todo.id)}
//                     onComplete={() => handleComplete(todo.id, todo.is_done)}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }