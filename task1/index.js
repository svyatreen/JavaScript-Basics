let name = 'Svyatoslav';
console.log(Number(name), Boolean(name), String(name));

let age = 19;
console.log(Number(age), Boolean(age), String(age));

let bigNumber = 30n;
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));

let isSunnyToday = true;
console.log(Number(isSunnyToday), Boolean(isSunnyToday), String(isSunnyToday));

let firstMessage = null;
console.log(Number(firstMessage), Boolean(firstMessage), String(firstMessage));

let carOwner;
console.log(Number(carOwner), Boolean(carOwner), String(carOwner));

let id = Symbol('id');
console.log(Boolean(id), String(id));

let product = {
  nameOfProduct: 'Jacket',
  price: 150,
  isComfortable: true,
};
console.log(Number(product), Boolean(product), String(product));
