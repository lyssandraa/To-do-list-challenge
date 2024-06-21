import { useState } from "react";

const addTask = ({ handleAddTask }) => {
  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      handleAddTask({ task, completed: false });
      setTask("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default addTask;
