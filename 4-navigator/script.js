const positionLatitude = 1;
const positionLongitude = 5;

const destinationLatitude = -3;
const destinationLongitude = 2;

const distance = Math.sqrt(
	
	(positionLatitude - destinationLatitude) ** 2 +
		(positionLongitude - destinationLongitude) +
		2
);

console.log(`Расстояние между точками: ${distance} м.`);
