'use strict';

const DEC = 'decrease';
const INC = 'increase';

const toDoList = {
	tasks: [
		{
			id: 1,
			name: 'Working',
			order: 1,
		},
	],
	lastTaskId: 1,
	taskIndex: function (id) {
		return this.tasks.findIndex((el) => el.id === id);
	},
	add: function (obj) {
		const task = { id: ++this.lastTaskId, ...obj };
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
	sortBy(field, arrow) {
		this.tasks.sort((a, b) =>
			arrow === INC ? a[field] - b[field] : b[field] - a[field]
		);
		console.log(`Sorted by: ${arrow}, by field: ${field}`, this.tasks);
	},
};

const newTasks = {
	tasks: [],
	lastTaskId: 0,
	taskIndex: toDoList.taskIndex,
	add: toDoList.add,
	delete: toDoList.delete,
	update: toDoList.update,
	sortBy: toDoList.sortBy,
};

newTasks.add({
	name: 'New object',
	order: 1,
	description: 'create new object with new field description',
});
newTasks.add({
	name: 'Clean table',
	order: 1,
	description: 'party was so great',
});
newTasks.add({
	name: 'Get meal',
	order: 3,
	description: 'brealfast is the best morning task',
});
newTasks.delete(2);
newTasks.delete(-4);
newTasks.add({
	name: 'Morning exercise',
	order: 2,
	description: 'its good for mind & body',
});
newTasks.update(1, { order: 4 });
newTasks.update(1, {
	name: 'Lazing',
	description: 'not time to work',
	isDone: true,
});
newTasks.update(-3, { name: 'Lazing' });
newTasks.sortBy('id', DEC);
newTasks.sortBy('order', INC);
newTasks.add({
	name: 'Walking',
	order: 3,
	description: 'breath air',
});

console.log('old toDoList: ', toDoList);
console.log('newTask: ', newTasks);
