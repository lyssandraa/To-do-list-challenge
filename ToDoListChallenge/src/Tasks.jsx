import { useState } from "react";

const Tasks = ({
  task,
  removeTask,
  toggleTask,
  editTask,
  archiveTask,
  isArchived,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);

  const handleEdit = () => {
    editTask(newTask);
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleTask}
          />
          <span>{task.task}</span>
          {!isArchived ? (
            <>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={archiveTask}>Archive</button>
              <button onClick={removeTask}>Delete</button>
            </>
          ) : (
            <>
              <button onClick={restoreArchivedTask}>Restore</button>
              <button onClick={deleteArchivedTask}>Delete</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Tasks;
