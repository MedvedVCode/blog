const positionLatitude = 1;
const positionLongitude = 5;

const destinationLatitude = -3;
const destinationLongitude = 2;

const distance = Math.sqrt(
	Math.pow(Math.abs(positionLatitude - destinationLatitude), 2) +
		Math.pow(Math.abs(positionLongitude - destinationLongitude), 2)
);

console.log(`Расстояние между точками: ${distance} м.`); // Расстояние между точками: 200 м.(distance);
