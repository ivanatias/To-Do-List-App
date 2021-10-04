import React from "react";
import styles from "./ToDoAdd.module.css";

const ToDoAdd = ({ newTask, setNewTask, setTasksList }) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({
      ...prev,
      id: Math.floor(Math.random() * 10000),
      [name]: value,
      done: false,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title || /^\s*$/.test(newTask.title)) {
      return;
    }
    setTasksList((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  return (
    <div className={styles.Wrapper}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Task"
            name="title"
            autoFocus
            maxLength="60"
            className={styles.input}
            value={newTask.title || ""}
            onChange={handleChange}
          />
          {newTask.title ? (
            <textarea
              name="description"
              maxLength="150"
              placeholder="Task Description (Optional)"
              value={newTask.description || ""}
              onChange={handleChange}
            ></textarea>
          ) : null}

          <button type="submit" className={styles.btn}>
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoAdd;
