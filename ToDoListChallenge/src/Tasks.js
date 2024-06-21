const Tasks = ({ task, removeTask, toggleTask }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.task}
      </span>
      <button onClick={removeTask}>Delete</button>
    </div>
  );
};

export default Tasks;
