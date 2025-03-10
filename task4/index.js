let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  const cube = numbers[i] ** 3;
  sum += cube;
  console.log(`i = ${i}, numbers = ${numbers}, sum = ${sum}`);
}
console.log(sum);

console.log('numbers', numbers);

// Через цикл for of
sum = 0;
for (let num of numbers) {
  const cube = num ** 3;
  sum += cube;
  console.log(`num = ${num}, numbers = ${numbers}, sum = ${sum}`);
}
console.log(sum);
