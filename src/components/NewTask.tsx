import React, { useState } from "react";
import type { NewTaskProps } from "../utils/type-utils";

const NewTask: React.FC<NewTaskProps> = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(event.target.value);
  };

  const handleAddTask = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
