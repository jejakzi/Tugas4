import React from "react";
import Lottie from "lottie-react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-xs gap-4 h-96 md:h-[600px] mx-auto">
        <Lottie
          animationData={require("../assets/empty.json")}
          loop
          autoPlay
          style={{ width: "100%" }}
        />
        <p className="text-center text-gray-500">No todos yet</p>
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-3">
      {todos.length > 0 && (
        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4"></div>
      )}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
