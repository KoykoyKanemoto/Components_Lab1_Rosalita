import React from "react";
import { format, isBefore } from 'date-fns';

interface TodoItemProps {
    id : string;
    task: string;
    is_done: boolean;
    deadline?: string;
    onDelete: () => void;
    onComplete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  is_done,
  deadline,
  onDelete,
  onComplete,
}) => {
    const isOverdue = deadline ? isBefore(new Date(deadline), new Date()) && !is_done : false;

  return (
    <div>
      <div className="relative border-1 rounded-2xl p-2 border-amber-200 h-15 flex flex-row my-5 items-center">
        <input
          type="checkbox"
          checked={is_done}
          onChange={onComplete}
          className="scale-125 mx-4"
        />
        <div className="flex flex-row w-[70%] h-[50%] text-left items-center justify-between px-3">
            <p className={`${is_done ? "text-gray-500 line-through" : ""}`}>{task}</p>
            {deadline && <p className="text-sm text-gray-500">Due: {format(new Date(deadline), "MM/dd/yy")}</p>}
        </div>
        <button
          onClick={onDelete}
          className="rounded-xl p-2 hover:scale-105 bg-[#ab045e] hover:bg-red-600 transition-all justify-self-end"
        >
          Delete
        </button>

        {deadline ?
        isOverdue ?
        (<div className="absolute bg-[#ab045e] h-6 w-20 p- rounded -top-[10%] -right-[15%]">Overdue</div>)
        : (<div className="absolute bg-[#ab045e] h-4 w-4 rounded-[50%] -top-[10%] right-0"></div>) 
        : (null)
        }

      </div>
    </div>
  );
};
