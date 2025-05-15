import React from "react";
import { format } from 'date-fns';

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
            <p className="">{task}</p>
            {deadline && <p className="text-sm text-gray-500">Due: {format(new Date(deadline), "MM/dd/yy")}</p>}
        </div>
        <button
          onClick={onDelete}
          className="rounded-xl p-2 hover:scale-105 bg-red-700 transition-all justify-self-end"
        >
          Delete
        </button>

        {deadline ? 
        <div className="absolute bg-red-600 h-4 w-4 rounded-[50%] -top-[10%] right-0"></div> 
        : null
        }

      </div>
      {/* <div className="my-2 h-0.25 w-[80%] bg-gray-300 justify-self-center"></div> */}
    </div>
  );
};
