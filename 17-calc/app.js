'use strict';

const operandFirstEl = document.querySelector('#operand-first');
const operandSecondEl = document.querySelector('#operand-second');
const operandResultEl = document.querySelector('#operand-result');
const buttonsEl = document.querySelectorAll('button');
const historyEl = document.querySelector('.history');

const operationState = {
	op1: 0,
	op2: 0,
	result: 0,
	history: '',
	makeOperation(sign) {
		this.op1 = Number(operandFirstEl.value);
		this.op2 = Number(operandSecondEl.value);
		if (isNaN(this.op1) || isNaN(this.op2)) {
			this.result = 'Ошибка';
		} else if (this.op2 === 0 && sign === '/') {
			this.result = 'Ошибка';
		} else {
			const funcSign = new Function('op1', 'op2', `return op1 ${sign} op2`);
			this.result = funcSign(this.op1, this.op2);
		}
		this.history = `${this.op1} ${sign} ${this.op2} = ${this.result}`;
	},
	plus() {
		this.makeOperation('+');
	},
	sub() {
		this.makeOperation('-');
	},
	multi: function () {
		this.makeOperation('*');
	},
	divide: function () {
		this.makeOperation('/');
	},
	clear: function () {
		clearLocalStorage();
	},
};

function appendHistoryEl(history) {
	const pEl = document.createElement('p');
	pEl.innerText = history;
	historyEl.append(pEl);
}

function addLocalStorage(el) {
	let history;
	const temp = localStorage.getItem('history');
	if (!temp) {
		history = [];
	} else {
		history = JSON.parse(temp);
	}
	history.push(el);
	localStorage.setItem('history', JSON.stringify(history));
}

function getLocalStorage() {
	let history;
	const temp = localStorage.getItem('history');
	if (!temp) {
		return;
	}
	history = JSON.parse(temp);
	history.forEach((el) => {
		appendHistoryEl(el);
	});
}

function clearLocalStorage() {
	localStorage.removeItem('history');
}

document.addEventListener('DOMContentLoaded', () => {
	getLocalStorage();
});

function buttonClick(eventBtn) {
	const operationId = eventBtn.target.id;
	operationState[operationId]();

	if (operationId === 'clear') {
		while (historyEl.firstChild) {
			historyEl.removeChild(historyEl.firstChild);
		}
	} else {
		operandResultEl.innerText = operationState.result;

		addLocalStorage(operationState.history);
		appendHistoryEl(operationState.history);

		operandFirstEl.value = '';
		operandFirstEl.placeholder = operationState.op1;

		operandSecondEl.value = '';
		operandSecondEl.placeholder = operationState.op2;
	}
}
