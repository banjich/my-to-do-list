import React, { useState } from 'react';
import icon from '../assets/pen-icon.png';

const Task = ({ list, setList, currentTask }) => {
  const [task, setTask] = useState('');
  const penIcon = icon;
  const onAddTask = (e) => {
    e.preventDefault();
    if (task === '') alert('Please enter a task');
    else {
      currentTask.text = task;
      setList([...list, currentTask]);
      setTask('');
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  };
  return (
    <div className='input-task'>
      <form>
        <input
          placeholder='Enter a task'
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        ></input>
        <button className='add-btn' type='submit' onClick={onAddTask}>
          <img src={penIcon} width='16px'></img>
          Add
        </button>
      </form>
    </div>
  );
};

export default Task;
