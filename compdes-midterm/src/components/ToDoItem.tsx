import React from "react";
import { deleteTodos, handleComplete } from "@/app/hooks/TaskManager";

interface TodoItemProps {
    id : string;
    task: string;
    is_done: boolean;
    deadline?: string;
    onDelete: () => void;
    onComplete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
    id,
    task,
    is_done,
    // deadline,
    // onDelete,
    // onComplete,
}) => {
    const handleDeleteClick = () => {
        deleteTodos(id);
    };

    const handleCompleteChange = () => {
        handleComplete(id, is_done);
    };

    return (
        <div>
            <div>
                <input 
                    type="checkbox" 
                    checked={is_done} 
                    onChange={handleCompleteChange}
                    className="scale-125"
                />
                <p>{task}</p>
                <button
                    onClick={handleDeleteClick}
                    className="rounded-xl p-2 hover:scale-105 bg-red-700 transition-all"
                >
                    Delete
                </button>
            </div>
            <div className="h-0.5 bg-gray-white"></div>
        </div>
    )
};