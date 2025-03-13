import React, { useState, useEffect } from "react";
import TodoForm from "./todolist/TodoForm";
import TodoList from "./todolist/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl mx-12">
        <h1 className="text-2xl font-extrabold text-[#f39c12] text-center mb-10">TODO LIST</h1>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
