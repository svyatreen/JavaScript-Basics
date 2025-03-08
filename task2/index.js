let correctAnswers = 0;
let incorrectAnswers = 0;

const firstQuestion = Number(prompt('Сколько будет 2 + 2?').trim());
const firstAnswer = 4;
if (firstQuestion === firstAnswer) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const secondQuestion = Number(prompt('Сколько будет 2 * 2?').trim());
const secondAnswer = 4;
if (secondQuestion === secondAnswer) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const thirdQuestion = Number(
  prompt(
    'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
  ).trim()
);
const thirdAnswer = 1;
if (thirdQuestion === thirdAnswer) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const fourthQuestion = Number(
  prompt(
    'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
  ).trim()
);
const fourthAnswer = 12;
if (fourthQuestion === fourthAnswer) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

const fifthQuestion = Number(prompt('Сколько будет 2 + 2 * 2?').trim());
const fiftthAnswer = 6;
if (fifthQuestion === fiftthAnswer) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

alert(
  `Конец теста! Правильные ответы — ${correctAnswers};Неправильные ответы — ${incorrectAnswers}`
);
