import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const TodoItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e) => setNewText(e.target.value);

  const handleBlur = () => {
    setIsEditing(false);
    if (newText.trim()) {
      updateTask({ ...task, text: newText });
    } else {
      setNewText(task.text); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleBlur();
  };

  return (
    <li className="flex items-center justify-between bg-gray-200 text-gray-800 p-3 rounded shadow mb-2">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="border p-1 rounded w-full bg-white text-gray-900"
        />
      ) : (
        <span onClick={handleEdit} className="cursor-pointer">
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        <Select onValueChange={(value) => updateTask({ ...task, status: value })} value={task.status}>
          <SelectTrigger className="w-24 bg-white text-gray-900">
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
