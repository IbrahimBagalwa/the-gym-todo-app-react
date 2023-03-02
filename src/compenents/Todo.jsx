import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = () => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), task };
      setTasks((task) => {
        return [...task, newTask];
      });
      setTask("");
    }
  };
  const handleDeleteTask = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="w-screen h-screen grid justify-items-center bg-gray-100">
      <div className="gap-4 md:gap-8 p-5 md:p-10 overflow-y-hidden h-[80%] my-auto w-full sm:w-9/12 grid  rounded-3xl content-start">
        <label className="text-gray-300 font-bold text-8xl text-center">
          todos
        </label>
        <button className="rounded-full mx-auto flex w-5/12 gap-2 bg-white border shadow-slate-500 shadow-md h-14 px-8 py-2 items-center">
          <input
            type="text"
            className="flex-grow px-2 outline-none h-full"
            placeholder="Add todo..."
            name="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <span
            className="text-white bg-blue-600 font-extrabold text-3xl rounded-full w-8 h-8 grid place-content-center pb-2"
            onClick={addTodo}
          >
            +
          </span>
        </button>
        <div className="grid gap-2 overflow-y-auto">
          {tasks.map((task) => {
            return (
              <TodoList
                key={task.id}
                {...task}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
