'use strict';

const DEC = 'decrease';
const INC = 'increase';

const toDoList = {
	tasks: [
		{
			id: 1,
			title: 'Working',
			priority: 1,
		},
	],
	lastTaskId: 1,
	taskIndex: function (id) {
		return this.tasks.findIndex((el) => el.id === id);
	},
	add: function (title, priority) {
		const task = { id: ++this.lastTaskId, title, priority };
		this.tasks.push(task);
		console.log('Add new task', task);
	},
	delete: function (id) {
		const taskPosition = this.taskIndex(id);
		if (taskPosition === -1) {
			console.log(`Delete: No task with id = ${id}`);
			return;
		}
		console.log('Deleted task:', ...this.tasks.splice(taskPosition, 1));
	},
	update: function (id, newTask) {
		const taskPosition = this.taskIndex(id);
		if (taskPosition === -1) {
			console.log(`Update: No task with id = ${id}`);
			return;
		}
		for (const key of Object.keys(newTask)) {
			this.tasks[taskPosition][key] = newTask[key];
		}
		console.log(`Update: task id = ${id} add/update`, newTask);
	},
	sortBy: function (field, arrow) {
		this.tasks.sort((a, b) =>
			arrow === INC ? a[field] - b[field] : b[field] - a[field]
		);
		console.log(`Sorted by ${arrow} by field ${field}`, this.tasks);
	},
};

toDoList.add('Wash dishes', 2);
toDoList.add('Clean table', 1);
toDoList.add('Get meal', 3);
toDoList.delete(2);
toDoList.delete(-4);
toDoList.add('Morning exercise', 2);
toDoList.update(1, { priority: 4 });
toDoList.update(1, { title: 'Lazing', desc: 'not time to work' });
toDoList.update(-3, { title: 'Lazing', desc: 'not time to work' });
toDoList.sortBy('id', DEC)
toDoList.sortBy('priority', INC)
toDoList.add('Walking', 3);

console.log(toDoList);
