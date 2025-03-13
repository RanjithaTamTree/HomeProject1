import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Button } from "@/components/ui/button";

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("todo")}>To-do</Button>
        <Button onClick={() => setFilter("working")}>Working</Button>
        <Button onClick={() => setFilter("finished")}>Finished</Button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TodoItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
