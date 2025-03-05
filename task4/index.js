// 1
console.log(Number(' 1 2 3 4 5')); // Выведет NaN
// 2
console.log(Number('1234 5')); // Выведет NaN
// 3
console.log(Number('12345')); // Выведет число 12345
// 4
console.log(String(false)); // Выведет строку false
// 5
console.log(Boolean(0000000)); // Выведет false
// 6
console.log(Boolean(0.0000001)); // Выведет true
// 7
console.log(String(undefined)); // Выведет строку undefined
// 8
console.log(Number('100f')); // Выведет NaN
// 9
console.log(Number('100')); // Выведет число 100
// 10
console.log(Number('000001')); // Выведет число 1
