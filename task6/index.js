const userText = prompt('Введите текст').trim();
const fragmentOfText = prompt('Введите слово из текста').trim();

const indexOfFragmnet = userText.indexOf(fragmentOfText);
const string = userText.slice(0, indexOfFragmnet);

alert(`Результат: ${string}`);
