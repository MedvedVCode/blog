const cards = [
	'1234-5678-9876-3457',
	'7234 5678 9f071234',
	'5062 8212 3456 7892',
];

const checkCardByLuna = (card) => {
	let cleanCard = card.trim().replaceAll(' ', '').replaceAll('-', '');
	if (cleanCard.length !== 16 || isNaN(Number(cleanCard))) {
		return false;
	}
	let sumDigits = 0;
	for (const index in cleanCard) {
		let num = Number(cleanCard[index]);
		if (index % 2 === 0) {
			num *= 2;
			num = num > 9 ? num - 9 : num;
		}
		sumDigits += num;
	}
	if (sumDigits % 10 !== 0) {
		return false;
	}
	return true;
};

for (const card of cards) {
	console.log(`Проверка карты ${card}: ${checkCardByLuna(card)}`);
}
