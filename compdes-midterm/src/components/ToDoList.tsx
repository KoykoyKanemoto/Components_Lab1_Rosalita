"use client";

import React, { useState, useEffect } from "react";
import { fetchTodos } from "@/app/hooks/TaskManager"; // Ensure this is the correct import
import { TodoItem } from "./ToDoItem";
import { ToDoForm } from "./ToDoForm";
import { Todos } from "@/types/todos.types";

export const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
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
        <h2 className="text-center text-2xl">Enter New Task</h2>
           <ToDoForm/>
        <div>
            {todos.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    is_done={todo.is_done}
                    onDelete={() => console.log("Delete function")} // Implement delete handler
                    onComplete={() => console.log("Complete function")} // Implement complete handler
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