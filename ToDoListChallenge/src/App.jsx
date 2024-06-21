import { useState } from "react";
import "./App.css";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleEditTask = (index, newTask) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, task: newTask } : task
    );
    setTasks(newTasks);
  };

  const handleArchiveTask = (index) => {
    const taskToArchive = tasks[index];
    setArchivedTasks([...archivedTasks, taskToArchive]);
    handleRemoveTask(index);
  };

  return (
    <>
      <div className="container">
        <h1>My To Do List</h1>
        <AddTask handleAddTask={handleAddTask} />
        <div>
          {tasks.map((task, index) => (
            <Tasks
              ket={index}
              task={task}
              removeTask={() => handleRemoveTask(index)}
              toggleTask={() => handleToggleTask(index)}
              editTask={(newTask) => handleEditTask(index, newTask)}
              archiveTask={() => handleArchiveTask(index)}
            />
          ))}
        </div>
        <h2>Archived Tasks</h2>
        <div>
          {archivedTasks.map((task, index) => (
            <Tasks key={index} task={task} isArchived />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
