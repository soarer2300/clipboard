import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="flex w-[75%]" onSubmit={handleSubmit}>
      <input
        className=" p-2 px-5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Add a task to the clipboard"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className=" mx-2 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        type="submit"
      >
        {" "}
        {editId ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
