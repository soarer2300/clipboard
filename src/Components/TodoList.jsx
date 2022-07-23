import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="flex flex-col items-center mt-2 w-[75%]">
      {todos.map((t) => (
        <li className="flex m-2 max-w-full justify-between">
          <CopyToClipboard text={t.todo}>
            <span
              className="clipboard-text w-screen mr-1 p-2 overflow-hidden rounded-lg border-solid border-2 border-[#48494d] hover:bg-[#48494d] hover:drop-shadow-xl hover:cursor-pointer"
              key={t.id}
            >
              {t.todo}
            </span>
          </CopyToClipboard>
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
