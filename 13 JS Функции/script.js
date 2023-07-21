// функции

// объявляю функцию
// function sayHello() {
//   console.log("Hello");
// }

// вызов функции
// sayHello();
// sayHello();
// sayHello();

// function count() {
//   console.log(2 + 2);
// }
// count();

// function getSumOfNumbers() {
//   let sum = 2 + 7;
//   console.log(sum);
// }

// getSumOfNumbers();
// getSumOfNumbers();

// let a = 5;
// let b = 9;

// function numbersGame() {
//   console.log(a + b);
// }

// numbersGame();
// numbersGame();
// numbersGame();

// аргументы - реальные значения (данные), которые передаются при вызове функции
// параметры - переменные в функции, вместо которых при вызове подставляются реальные значения (аргументы)

// function sayHello(userName) {
//   console.log(`Hello, ${userName}`);
// }

// sayHello("Ivan"); // Hello, Ivan
// sayHello("Inna"); // Hello, Inna

// function count() {
//   console.log(2 + 2);
// }
// count();
// перепишите функцию так, чтобы она могла считать сумму двух произвольных чисел

// объявляем функцию с параметрами num1, num2
// function countNum(num1, num2) {
//   let result = num1 + num2;
//   console.log(result);
// }

// countNum(5, 7);
// countNum(23123, 123454);
// countNum(32, 54);

// function count(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }
// count(23, 66);
// count(35, 78);

// let a = 5;
// let b = 4;

// function aPlusB(num1, num2) {
//   console.log(num1 + num2);
// }

// aPlusB(a, b);

// function count(num1, num2) {
//   // проверяем число ли
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     console.log(num1 + num2);
//   } else {
//     console.log("No numbers");
//   }
// }
// count(4, 7);

// function countNum(num1 = 0, num2 = 0) {
//   let result = num1 + num2;
//   console.log(result);
// }

// countNum(4, 8);

// задание 4
// напишите функцию, которая будет выводить приветствие по имени
// юзера. Если аргумент не передан, должно выводиться стандартное приветствие

// function userName(name) {
//   if (name) {
//     alert(`Hi, ${name}`);
//   } else {
//     alert(" Ты кто такой? Давай, досвидания");
//   }
// }

// userName();

// function sayHello(userName) {
//   if (userName === "Valentino") {
//     console.log(`Hello, ${userName}!`);
//   } else {
//     console.log(`Hello!`);
//   }
// }
// sayHello("Ivan");
// sayHello("Valentino");

// function greetings(user) {
//   if (typeof user === "string") {
//     console.log(`Greetings ${user}`);
//   } else {
//     console.log("Greetings, user!");
//   }
// }
// greetings("Ivan");

// function greetings(user = "User") {
//   console.log(`Greetings, ${user}`);
// }
// greetings();

// function privet(name) {
//   if (name) {
//     console.log("Привет, " + name);
//   } else {
//     console.log("Привет, пользователь");
//   }
// }
// privet("Вася");

// function privet(name) {
//   console.log(`Привет, ${name ?? "Пользователь"}`);
// }
// privet("Иван");

let arr = [1, 2, 3, 6, 8, 3, 1];
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];

// 1. напишите функцию, которая принимает на вход любой одномерный массив, и выводит в консоль все его элементы.

// 2. Напишите функцию, которая принимает на вход любой одномерный массив, и считает сумму, если в массиве числа, и складывает массив в строку, если в элементах массива строки. Функция должна возвращать результат. Если не все элементы числа или строки в массиве, то возвращать сообщение об ошибке.
