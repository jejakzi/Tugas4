import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TodoList from "./components/TodoList";
import { configToast } from "./config/toast.config";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const addTodo = (text) => {
    if (text.trim() === "") return;

    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setTodoText("");

    toast.success("Todo added successfully!", configToast);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    toast.success("Todo updated successfully!", configToast);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    toast.success("Todo removed successfully!", configToast);
  };

  useEffect(() => {
    setIsDisabled(todoText.length < 3 || todoText.trim() === "");
  }, [todoText]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white">
        <h1 className="mb-5 text-3xl font-semibold text-center text-transparent text-gray-700 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
          Todo List
        </h1>
        <div className="flex flex-col">
          <div className="flex mb-5">
            <input
              type="text"
              className="flex-1 p-3 border border-gray-300 rounded-xl"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="Add a new todo"
            />
            <button
              disabled={isDisabled}
              onClick={() => addTodo(todoText)}
              className="px-4 py-3 ml-3 font-bold text-white disabled:brightness-90 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl"
            >
              ADD
            </button>
          </div>
          {todoText.length < 3 && todoText.trim() !== "" && (
            <p className="-mt-4 text-sm italic text-red-500">
              * Enter minimum 3 characters
            </p>
          )}
        </div>
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
