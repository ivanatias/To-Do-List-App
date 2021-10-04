import { useState } from 'react';
import Tasklist from './components/Tasklist';
import ToDoAdd from './components/ToDoAdd';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState({});
  const [tasksList, setTasksList] = useState([]);


  return (
    <div className="todo-app">
      <h1>Take note of your tasks <span style={{ color: "#8D5385" }}>easily!</span></h1>
      <ToDoAdd
        newTask={newTask} setNewTask={setNewTask} setTasksList={setTasksList}
      />
      <Tasklist
        tasksList={tasksList} setTasksList={setTasksList}
      />
    </div>
  );
}

export default App;
