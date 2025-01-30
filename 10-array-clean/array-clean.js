const arr = [3, 6, 8, 9, 11, 4, 2, 7];

const isDelete = (num) => (arrElement) => arrElement > num;

function clean(arr, fn) {
	for (let index = 0; index < arr.length; index++) {
		if (fn(arr[index])) {
			arr.splice(index, 1);
			index--;
		}
	}
	return arr;
}

console.log('Результат:', clean(arr, isDelete(5)));
