const USD = 'USD';
const EUR = 'EUR';
const RUB = 'RUB';

const isCurrencyExist = (currency) =>
	currency === USD || currency === EUR || currency === RUB;

const convertCurrency = function (amount, currencyFrom, currencyTo) {
	if (
		!(Number(amount) && isCurrencyExist(currencyFrom) && isCurrencyExist(currencyTo))
	) {
		return null;
	}

	const USD_TO_RUB = 101.96;
	const EUR_TO_RUB = 105.05;
	const EUR_TO_USD = 1.04;

	switch (currencyFrom) {
		case USD:
			switch (currencyTo) {
				case EUR:
					return amount / EUR_TO_USD;
				case RUB:
					return amount * USD_TO_RUB;
			}
		case EUR:
			switch (currencyTo) {
				case USD:
					return amount * EUR_TO_USD;
				case RUB:
					return amount * EUR_TO_RUB;
			}
		case RUB:
			switch (currencyTo) {
				case USD:
					return amount / USD_TO_RUB;
				case EUR:
					return amount / EUR_TO_RUB;
			}
	}
};

console.log(convertCurrency(100, USD, EUR));
console.log(convertCurrency(0, 'RUB', USD));
console.log(convertCurrency(-100, RUB, EUR));
console.log(convertCurrency(100, EUR, USD));
console.log(convertCurrency(100, USD, 'ch'));
console.log(convertCurrency(100, EUR, RUB));
