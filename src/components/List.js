import React, { useEffect, useState } from 'react';
import Task from './Task';
import icon from '../assets/delete.png';

const List = () => {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('tasks');
    const initialValue = JSON.parse(saved);
    return initialValue || null;
  });
  const currentTask = { text: '', key: Date.now() };
  const deleteIcon = icon;
  const onDelete = (key) => {
    const newArr = list.filter((task) => {
      return task.key !== key;
    });
    setList([...newArr]);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(list));
  }, [list]);

  return (
    <div className='list'>
      <Task list={list} setList={setList} currentTask={currentTask} />
      {list.map((task) => {
        return (
          <div className='task' key={task.key}>
            {task.text}
            <button className='delete' onClick={() => onDelete(task.key)}>
              <img src={deleteIcon} width='22px'></img>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
