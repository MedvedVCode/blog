const dates = [
	'10-02-2022',
	'31-03-2022',
	'10-a2-2022',
	'10-2022',
	'gdvhsg',
	'11/12/2023',
	'11/12/20a3',
	'00/12/2021',
	'41-12-1989',
	'02/29/2021',
	'02/05/2021',
	'02/29/2020',
];

const checkDate = (date) => {
	const [day, month, year] = date;

	if (date.length !== 3) {
		return false;
	}
	if (!day || day <= 0 || day > 31) {
		return false;
	}
	if (!month || month <= 0 || month > 12) {
		return false;
	}
	if (!year || year <= 0) {
		return false;
	}
	if ([3, 5, 9, 11].includes(month)) {
		if (day > 30) {
			return false;
		}
	}
	if (month === 2) {
		if (year % 4 === 0) {
			if (day > 29) return false;
		} else if (day > 28) {
			return false;
		}
	}
	return true;
};

const modifyDate = (arr) => {
	return arr
		.map((date) => {
			if (date.indexOf('/') !== -1) {
				date = date.split('/').map((el) => Number(el));
				const temp = date[0];
				date[0] = date[1];
				date[1] = temp;
				const isValidDate = checkDate(date);
				return isValidDate
					? date.map((el) => String(el).padStart(2, '0')).join('-')
					: false;
			} 
			else if (date.indexOf('-') !== -1) {
				date = date.split('-').map((el) => Number(el));
				const isValidDate = checkDate(date);
				return isValidDate
					? date.map((el) => String(el).padStart(2, '0')).join('-')
					: false;
			}
			return false;
		})
		.filter((date) => date !== false);
};

console.log(modifyDate(dates));
