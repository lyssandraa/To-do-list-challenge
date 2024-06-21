import { useState } from "react";

// tasks component to display each task and handle task-specific actions //
const Tasks = ({
  task, // the task object containing the task details //
  removeTask, //function to remove task from the main list //
  toggleTask, // toggle the completion status of the task //
  editTask, // edit the task //
  archiveTask, // archive the task //
  isArchived, // boolean indicating if the task is archived //
  deleteArchivedTask, // delete the task from the archived list //
  restoreArchivedTask, // restore the task to the main list //
}) => {
  const [isEditing, setIsEditing] = useState(false); // handles the editing mode //
  const [newTask, setNewTask] = useState(task.task); // handles the new task text during editing //

  // to save edited task //
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
