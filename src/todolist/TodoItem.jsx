import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const TodoItem = ({ task, updateTask, deleteTask }) => {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow mb-2">
      <span>{task.text}</span>

      <div className="flex gap-2">
        <Select onValueChange={(value) => updateTask({ ...task, status: value })} value={task.status}>
          <SelectTrigger className="w-24">
            <span>{task.status}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">To-do</SelectItem>
            <SelectItem value="working">Working</SelectItem>
            <SelectItem value="finished">Finished</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={() => deleteTask(task.id)} variant="destructive">
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
