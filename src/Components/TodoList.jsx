import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="flex flex-col items-center mt-2">
      {todos.map((t) => (
        <li className="flex m-2 w-[55%] justify-between">
          <span
            className="w-screen mr-1 p-2 overflow-hidden rounded-lg bg-slate-500"
            key={t.id}
          >
            {t.todo}
          </span>
          <div className="flex">
            <button
              className=" mx-1 text-white bg-cyan-500 hover:bg-cyan-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => handleEdit(t.id)}
            >
              Edit
            </button>
            <button
              className=" mx-1 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => handleDelete(t.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
