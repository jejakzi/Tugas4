import React from "react";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-3 bg-gray-100 rounded-xl">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-3"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="font-bold text-red-500 hover:text-red-700"
      >
        &times;
      </button>
    </div>
  );
};

export default TodoItem;
