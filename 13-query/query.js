const makeQueryFromObj = (obj) => {
	const keys = Object.keys(obj);
	return keys.reduce((acc, key, i) => {
		acc += `${key}=${obj[key]}`;
		if (i !== keys.length - 1) {
			acc += '&';
		}
		return acc;
	}, '');
};

console.log(makeQueryFromObj({ serch: 'Vasya', take: 10, isDone: true }));
