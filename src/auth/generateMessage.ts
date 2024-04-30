const dictionary = {
	0: '0️⃣',
	1: '1️⃣',
	2: '2️⃣',
	3: '3️⃣',
	4: '4️⃣',
	5: '5️⃣',
	6: '6️⃣',
	7: '7️⃣',
	8: '8️⃣',
	9: '9️⃣',
};

export const message = (number) => {
	const arr = number.toString().split('');
	const str = arr.map((item) => dictionary[item]).join('');
	return `Ваш код: ${str}` + '\n' + 'для запобігання злому не передавайте цей код нікому';
};
