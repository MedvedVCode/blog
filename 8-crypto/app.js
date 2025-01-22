const crypto = (word) => {
	if (!word) return '';
	if (word.length === 1) {
		return `${word}_`;
	}
	const arr = word.split('');
	const password = arr.splice(0, arr.length / 2);
	return password.reverse().concat(arr).join('_');
};

const check = (cryptoWord, checkWord) => cryptoWord === crypto(checkWord);

console.log(check(crypto('convert'), 'convert'));
console.log(check(crypto('convert'), 'conver'));
console.log(check(crypto('c'), 'c'));
console.log(check(crypto('b'), 'c'));
console.log(check(crypto(), ''));
