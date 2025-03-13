import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ id: uuidv4(), text: task, status: "todo" });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task..." 
         className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2"/>
      <Button type="submit" variant="default">Add</Button>
    </form>
  );
};

export default TodoForm;
