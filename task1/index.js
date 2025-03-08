const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();

if (existingUserLogin === userLogin && existingUserPassword === userPassword) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert('Логин и (или) Пароль введены неверно!');
}

// const message =
//   existingUserLogin === userLogin && existingUserPassword === userPassword
//     ? `Добро пожаловать, ${userLogin}!`
//     : 'Логин и (или) Пароль введены неверно!';
// alert(message);

// switch (true) {
//   case existingUserLogin === userLogin && existingUserPassword === userPassword:
//     alert(`Добро пожаловать, ${userLogin}!`);
//     break;
//   default:
//     alert('Логин и (или) Пароль введены неверно!');
// }
