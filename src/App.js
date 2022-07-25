import React, { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const localTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(localTodos);
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    localStorage.removeItem(delTodo);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    localStorage.setItem("todo", JSON.stringify(editTodo));
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-[75%] xl:w-[50%]">
        <h1 className="m-5 text-5xl">Clipboard</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
