import React, { useState } from 'react';
import './App.css';
import './components/AddForm/Form.css';
import './components/List/List.css';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');

	const handleAddTask = () => {
		if (newTask.trim() !== '') {
			const updatedTasks = [...tasks, { text: newTask, completed: false }];
			setTasks(updatedTasks);
			setNewTask('');
		}
	};

	const handleToggleCompletion = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTasks(updatedTasks);
	};

	const handleDeleteTask = (index) => {
		const updatedTasks = tasks.filter((task, i) => i !== index);
		setTasks(updatedTasks);
	};

	return (
		<div className="App">
			<h1>ToDo List</h1>
			<div>
				<input
					type="text"
					placeholder="Add a new task"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button onClick={handleAddTask}>Add Task</button>
			</div>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<input
							type="checkbox"
							checked={task.completed}
							onChange={() => handleToggleCompletion(index)}
						/>
						<span
							style={{
								textDecoration: task.completed ? 'line-through' : 'none',
							}}
						>
							{task.text}
						</span>
						<button onClick={() => handleDeleteTask(index)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
