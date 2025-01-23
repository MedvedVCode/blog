const arr = [1, 40, -5, 10, 0, 2, -7, 8];
const INC = 'increase';
const DEC = 'decrease';

const checkArrItemsByDesc = (arr, i, j, desc) => {
	return desc === INC ? arr[i] > arr[j] : arr[i] < arr[j];
};

const sortLoops = (arr, desc) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (checkArrItemsByDesc(arr, i, j, desc)) {
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
};

console.log('Исходный массив:', arr);
console.log('Сортировка по возрастанию:', sortLoops(arr, INC));
console.log('Сортировка по убыванию:', sortLoops(arr, DEC));
