// функциональная область видимости

// 1
// function sayHello() {
//   let greet = "Hello, summer";
//   console.log(greet);
// }

// sayHello();
// console.log(greet);

// 2
// let firstName = "Ivan";

// function sayHello() {
//   let firstName = "Sergey";
//   console.log(firstName);
// }

// sayHello();
// console.log(firstName);

// 3
// let firstName = "Ivan";

// function sayHello() {
//   console.log(firstName);
// }

// sayHello();
// console.log(firstName);

// 4
// let firstName = "Ivan";

// function sayHello() {
//   let firstName; // undefined
//   console.log(firstName);
// }

// sayHello();
// console.log(firstName);

// блочная область видимости
// let age = 44;
// let msg = "";

// if (age >= 21) {
//   msg = "Доступ разрешен";
// }
// console.log(msg);

// лексическая область видимости

// 1
// function outer() {
//   let firstName = "Артем";

//   function inner() {
//     let msg = `Привет, ${firstName}`;
//     console.log(msg);
//   }
//   inner();
// }

// outer();

// 2
// let firstName = "Артем";
// function outer() {
//   function inner() {
//     let msg = `Привет, ${firstName}`;
//     console.log(msg);
//   }
//   inner();
// }

// outer();

// 3
// function outer() {
//   let msg = `Привет, ${firstName}`;

//   function inner() {
//     let firstName = "Артем";
//     console.log(msg);
//   }
//   inner();
// }

// outer();

// функциональные выражения

// определение функции
// sayHello();
// function sayHello() {
//   console.log("Hello, summer");
// }

// функциональное выражение
// let sayHello = function () {
//   console.log("Hello, summer");
// };
// sayHello();

// передача функции как аргумент
// 1
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];

// function sumArr(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// let result = sumArr(nums);
// console.log(result);

// console.log(sumArr(nums));
// console.log(sumArr);

// 2
// function makeGreet(firstName) {
//   return `Добрый день, ${firstName}`;
// }

// console.log(makeGreet("Иван")); // вызов функции
// console.log(makeGreet); // передача функции как значение

// 3
/*
function getSumm() {
  console.log(4 + 6);
}

function getMultiple() {
  console.log(5 * 5);
}

// функция принимает как агрумент другую функцию
function outer(func) {
  func();
}

// outer(getSumm);
// outer(getMultiple);

function sayHello() {
  console.log("hello");
}

// outer(sayHello);
outer(function () {
  console.log("hello");
});
*/

// возврат функции из другой функции
// замыкание
// function outer() {
//   let num1 = 5;

//   function inner(num) {
//     return num * num1;
//   }

//   return inner;
// }

// let globalFunc = outer();

// console.log(globalFunc(10));
// console.log(globalFunc(9));
// console.log(globalFunc(97));
