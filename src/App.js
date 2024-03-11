import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [counts, setCounts] = useState({});

  const handleAddTask = (taskName) => {
    const matches = taskName.match(/^(.+)\s(\d+)$/);
    let count = 1;
    let task = taskName;

    if (matches) {
      task = matches[1];
      count = parseInt(matches[2]);
    }

    const newTasks = [...tasks];
    for (let i = 0; i < count; i++) {
      newTasks.push(task);
    }
    setTasks(newTasks);

    const newCounts = { ...counts };
    newCounts[task] = (newCounts[task] || 0) + count;
    setCounts(newCounts);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='app'>
    <div className="App ">
      <h1>Day Goals!</h1>
      <div className="todo-list">
        <input type="text" placeholder="Enter task" className='input1' onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTask(e.target.value);
            e.target.value = '';
          }
        }} />
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)} className='delete'>✖️</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="counts">
        {Object.keys(counts).map((task, index) => (
          <div key={index}>
            {task}: {counts[task]}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
