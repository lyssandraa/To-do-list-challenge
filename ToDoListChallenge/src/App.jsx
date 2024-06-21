import { useState } from "react";
import "./App.css";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

// main app component to handle the overall application state and logic //
const App = () => {
  const [tasks, setTasks] = useState([]); // to store the main list of tasks //
  const [archivedTasks, setArchivedTasks] = useState([]); // to store the archived tasks //

  // to add new task to the main list //
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // to remove a task from the main list //
  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // to toggle the completion status of a task //
  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  // to edit the task text //
  const handleEditTask = (index, newTask) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, task: newTask } : task
    );
    setTasks(newTasks);
  };

  //archive a task by moving it from main list to archived list //
  const handleArchiveTask = (index) => {
    const taskToArchive = tasks[index];
    setArchivedTasks([...archivedTasks, taskToArchive]);
    handleRemoveTask(index);
  };

  // to delete an archived task //
  const handleDeleteArchivedTask = (index) => {
    const newArchivedTasks = archivedTasks.filter((_, i) => i !== index);
    setArchivedTasks(newArchivedTasks);
  };

  // to restore an archived task //
  const handleRestoreArchivedTask = (index) => {
    const taskToRestore = archivedTasks[index];
    setTasks([...tasks, taskToRestore]);
    handleDeleteArchivedTask(index);
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
            <Tasks
              key={index}
              task={task}
              isArchived
              deleteArchivedTask={() => handleDeleteArchivedTask(index)}
              restoreArchivedTask={() => handleRestoreArchivedTask(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
