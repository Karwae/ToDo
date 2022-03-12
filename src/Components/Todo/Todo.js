import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import "./Todo.css";

function Todo({ todo, removeTask, handleToggle, handleOpenTodo, addform }) {
  const valueread = (todo) => {
    addform(todo);
    handleOpenTodo();
  };

  return (
    <div className="todo-box">
      <div className="todo-item">
        <span onClick={() => handleToggle(todo.id)}>
          <Checkbox
            checked={todo.complete === true}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </span>
        <div className={todo.complete ? "todo-true" : "todo-false"}>
          {todo.title}
        </div>
      </div>
      <div className="todo-icon">
        <div onClick={() => valueread(todo)}>
          <WysiwygIcon />
        </div>
        <div onClick={() => removeTask(todo.id)}>
          <DeleteOutlineIcon />
        </div>
      </div>
    </div>
  );
}

export default Todo;
