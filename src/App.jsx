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
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
