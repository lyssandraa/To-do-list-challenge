import { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    let newTasksArr = [...tasks];
    newTasksArr.push(task);
    setTasks(newTasksArr);
  };

  const handleRemoveTask = (index) => {
    let newTasksArr = [...tasks];
    newTasksArr.splice(index, 1);
    setTasks(newTasksArr);
  };

  return (
    <>
      <div>
        <h1>My To Do List</h1>
        {tasks.map((myTasks, index) => {
          return (
            <Tasks
              key={index}
              myTasksData={myTasks}
              removeTask={() => handleRemoveTask(index)}
            />
          );
        })}
      </div>

      <div>
        <h2>To Do:</h2>
      </div>
    </>
  );
};

const Tasks = ({ myTasksData, removeTask }) => {
  return (
    <div>
      <p>{myTasksData.task}</p>
      <button onClick={removeTask}>Delete</button>
    </div>
  );
};

export default App;
