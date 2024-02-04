import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, onToggleCompletion, onDeleteTask }) => {
	return (
		<ul>
			{tasks.map((task, index) => (
				<TaskItem
					key={index}
					task={task}
					onToggleCompletion={() => onToggleCompletion(index)}
					onDeleteTask={() => onDeleteTask(index)}
				/>
			))}
		</ul>
	);
};

export default TaskList;
