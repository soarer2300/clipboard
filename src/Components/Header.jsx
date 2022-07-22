import React from "react";

const Header = () => {
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() === "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
    });
  };

  return (
    <div>
      <header>
        <h1>Clipboard</h1>
        <form id="new-task-form">
          <input
            type="text"
            name="new-task-input"
            id="new-task-input"
            placeholder="What do you have planned?"
          />
          <input
            type="submit"
            id="new-task-submit"
            value="Add task"
            onClick={handleSubmit}
          />
        </form>
      </header>
      <section class="task-list">
        <h2>Tasks</h2>

        <div id="tasks">
          <div class="task">
            <div class="content">
              <input type="text" class="text" value="A new task" readonly />
            </div>
            <div class="actions">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
