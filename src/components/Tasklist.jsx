import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import styles from "./Tasklist.module.css";

const Tasklist = ({ tasksList, setTasksList }) => {
  const handleDelete = (taskIdToRemove) => {
    setTasksList((prevTask) =>
      prevTask.filter((task) => task.id !== taskIdToRemove)
    );
  };

  const handleCheck = (taskId) => {
    let updatedTasks = [...tasksList].map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
      }
      return task;
    });
    setTasksList(updatedTasks);
  };

  return (
    <div className={styles.tasksContainer}>
      {tasksList.map((task, index) => (
        <div
          className={
            task.done ? `${styles.Task} ${styles.TaskDone}` : `${styles.Task}`
          }
          key={index}
        >
          <div className={styles.TaskInfo}>
            <header>{task.title}</header>
            <div className={styles.buttons}>
              <button onClick={() => handleCheck(task.id)}>
                <FaCheck />
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <FaTrash />
              </button>
            </div>
          </div>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;
