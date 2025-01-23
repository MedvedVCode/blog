const hasLicense = true;
const age = 18;
const isDrunk = false;

console.log(
	`Водитель может сесть за руль: ${
		(hasLicense && age >= 18 && !isDrunk) ? 'Yes' : 'No'
	}`
);
