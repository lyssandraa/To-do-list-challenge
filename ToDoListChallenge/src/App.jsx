import { useState } from "react";
import "./App.css";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
