const chosenLanguage = prompt('Какой язык вы хотите выбрать для приветсвтия?');

switch (chosenLanguage) {
	case 'ru':
		console.log('Привет, друг!');
		break;
	case 'en':
		console.log('Hello, friend!');
		break;
	case 'fr':
		console.log('Bonjour, ami!');
		break;
	case 'de':
		console.log('Hallo, Freund!');
		break;
	default:
		console.log('Нет такого языка в списке, поэтому КУ!!');
}
