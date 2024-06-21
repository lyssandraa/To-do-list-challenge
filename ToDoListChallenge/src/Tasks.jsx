const Tasks = ({ task, removeTask, toggleTask }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      <span>{task.task}</span>
      <button onClick={removeTask}>Delete</button>
    </div>
  );
};

export default Tasks;
