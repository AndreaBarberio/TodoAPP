import React from 'react';

const TaskItem = ({ task, onToggleCompletion, onDeleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleCompletion}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={onDeleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
