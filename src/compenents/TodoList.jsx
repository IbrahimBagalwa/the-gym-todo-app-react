import { useState } from "react";
import { FaTrash } from "react-icons/fa";
const TodoList = ({ id, todo, handleDeleteTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <span className="flex gap-4 items-center justify-center">
      <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} />
      <span
        className={`flex-grow ${isChecked && "line-through text-gray-500"} `}
      >
        {todo && todo[0]?.toUpperCase() + todo.slice(1, todo.length)}
      </span>
      <span className="text-xl py-2 px-4 flex gap-2">
        <span
          className="text-red-400 hover:cursor-pointer bg-gray-200 rounded-full p-2"
          onClick={() => handleDeleteTask(id)}
        >
          <FaTrash />
        </span>
      </span>
    </span>
  );
};

export default TodoList;
