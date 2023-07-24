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

// let nums = [1, 2, 3, 6, 8, 3, 1];
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];

// 1. напишите функцию, которая принимает на вход любой одномерный массив, и выводит поочередно в консоль все его элементы.

// 1. Решение
// function logArray(arr) {
//   for (let value of arr) {
//     console.log(value);
//   }
// }
// logArray(nums);
// logArray(fruits);
// logArray(pets);
// logArray(cats);

// 2. Напишите функцию, которая принимает на вход любой одномерный массив, и считает сумму, если в массиве числа, и складывает массив в строку, если в элементах массива строки. Функция должна возвращать результат. Если не все элементы числа или строки в массиве, то возвращать сообщение об ошибке.

let nums = [1, 2, 3, 4, 8, 3, 1];
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];

// 2. Решение
// 2.1 Проверяем, что в массиве все элементы являются числами
// если все элементы - числа, то складываем значения
// если хотя бы один элемент не числовой, то возвращаем ошибку
function summArr(arr) {
  // проверяем, что в массиве все знаяения являются числами
  let isAllNumbers = true;
  for (let value of arr) {
    // если НЕ число, ошибка
    if (typeof value !== "number") {
      isAllNumbers = false;
      break;
    }
  }
  if (isAllNumbers) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  } else {
    return "В массиве есть не число";
  }
}
console.log(summArr(nums));

//////////////////////////////////////////////////////////////////////////////////////////////

// 1. функция формирует приветствие пользователю
// function sayHello(userName) {
//   let result = `Hello, ${userName}`;
//   return result;
// }

// let greet1 = sayHello("Ivan"); // Hello, Ivan
// let greet2 = sayHello("Irina"); // Hello, Irina
// let greet3 = sayHello("Anna"); // Hello, Anna
// let greet4 = sayHello("Anatoliy"); // Hello, Anatoliy

// // 2. добавляем приветствию HTML разметку (<p>) и выводим в документ
// function makePar(greeting) {
//   document.write(`<p>${greeting}</p>`);
// }
// makePar(greet1);
// makePar(greet2);
// makePar(greet3);
// makePar(greet4);

// есть переменная с приветствием и именем пользователя
// напишите функцию, которая принимает эти переменные, формирует приветвтвие и возвращает
// сформированное значение. В глобальном коде выведите это значение в документ или консоль
// let greet = "Добрый день"; // Добрый день / Добрый вечер / Доброе утро
// let firstName = "Ангелина"; // произвольное имя пользователя

// 1
// function createGreat(partofday, userName) {
//   return `${partofday}, ${userName}!`;
// }
// function makeGreat(greeting) {
//   document.write(`<p>${greeting}</p>`);
// }
// makeGreat(createGreat(greet, firstName));

// 2
/*
function sayGreet(greet, userFirstName) {
  let result = `<p>${greet}, ${userFirstName}</p>`;
  return result;
}
document.write(sayGreet(greet, firstName));
document.write(sayGreet("Hello", "Anna"));
*/

// 3
/*
let greeting1 = "Доброе утро";
let greeting2 = "Добрый день";
let greeting3 = "Добрый вечер";
let firstName = "Ангелина"; // произвольное имя пользователя

function greeting(greeting, firstName) {
  let result = `${greeting}, ${firstName} :)`;
  return result;
}
let gree2 = greeting(greeting2, firstName);

function makeParGree(greetingN) {
  document.write(`<p>${greetingN}</p>`);
}
makeParGree(gree2);
*/

// 4
// function sayGM(greetPar, firstNamePar) {
//   let result = `${greetPar}, ${firstNamePar} !!!`;
//   //console.log(result);
//   return result;
// }

// let greeting1 = sayGM("Доброе утро", "Ангелина");
// let greeting2 = sayGM("Пока", "Иван");

// document.write(greeting2);

// 5
// function sayGreet(greet, firstName, end) {
//   let result = `${greet}, ${firstName} ${end}`;
//   return result;
// }
// document.write(`<p>${sayGreet("Пока", "Иван", "!!!")}</p>`);
// document.write(`<p>${sayGreet("Доброе утро", "Ангелина", "!")}</p>`);
// document.write(`<p>${sayGreet("Добрый вечер", "Иван", ".")}</p>`);
// document.write(`<p>${sayGreet("Привет", "Сергей", "!")}</p>`);

// функция проверяет возраст и возвращает строку с приветствием
// если возраст подходит под условие
// function checkAge(age) {
//   if (age >= 6) {
//     return "<h2>Добро пожаловать!</h2>";
//   }
// }

// let result = checkAge(9);
// document.write(result);

// напишите функцию, которая принимает возраст клиента
// и проверяет возраст на совершеннолетие.
// если пользователь совершеннолетний, функция должна вернуть строку с приветствием
// если пользователь несовершеннолетний, функция должна вернуть строку с блокировкой доступа
// 1
// function checkAge(age) {
//   if (age >= 18) {
//     return "Приветствуем, вас!";
//   } else {
//     return "Вход заблокирован!";
//   }
// }
// alert(checkAge(18));

// 2
// function checkAge(age) {
//   if (age >= 18) {
//     return "<h2>Добро пожаловать!<h2>";
//   } else {
//     return "<h2>Доступ запрещён!</h2>";
//   }
// }

// let result = checkAge(18);
// document.write(result);

// 3
// function checkAge(age) {
//   if (age >= 18) {
//     return "Привет!";
//   } else {
//     return "Вход воспрещен!";
//   }
// }
// let result = checkAge(2);
// document.write(result);

/**
 * рассчет значений для формирования данных по счету
 */
/*
// массив с начислениями за обед
let bill1 = [399, 599, 199, 649, 499, 1199];
let bill2 = [399, 599, 599, 199, 199, 649, 899, 499, 1199];
let tip = 10; // чаевые в процентах

// 1. рассчитать сумму счета - сложить все элементы массива
// 2. рассчитать сумму счета с учетом чаевых - добавить чаевые к счету
// 3. вывести сформированную для клиетна строку в документ

// 1. рассчитать сумму счета - сложить все элементы массива
function getSummBill(billArr) {
  let sum = 0;
  for (let num of billArr) {
    sum += num;
  }

  return sum;
}
// сумма счета
let summBill1 = getSummBill(bill1);
let summBill2 = getSummBill(bill2);
// console.log(summBill1);

// 2. рассчитать сумму счета с учетом чаевых - добавить чаевые к счету
function getSummBillTip(bill, tip) {
  let tipValue = Math.round((bill / 100) * tip); // сумма чаевых
  let billTip = bill + tipValue; // сумма счета с учетом чаевых

  // возвращаем объект с данными
  return {
    tipValue: tipValue,
    billTip: billTip,
  };
}

let totalBillTip1 = getSummBillTip(summBill1, tip);
let totalBillTip2 = getSummBillTip(summBill2, tip);
// console.log(totalBillTip1);
// console.log(totalBillTip1.tipValue);
// console.log(totalBillTip1.billTip);

// 3. вывести сформированную для клиетна строку в документ
function makeBillInfo(summBill, totalBillTipObj) {
  let result = `
        <div class="bill-info">
            <h2>Сумма счета за обед</h2>
            <p>Сумма счета: ${summBill}</p>
            <p>Чаевые: ${totalBillTipObj.tipValue}</p>
            <h3>Итого: ${totalBillTipObj.billTip}</h3>
        </div>
    `;
  return result;
}
document.write(makeBillInfo(summBill1, totalBillTip1));
document.write(makeBillInfo(summBill2, totalBillTip2));
*/

// методы
// let user = {
//   firstName: "Иван",
//   lastName: "Иванов",
//   // getInfo - метод объекта user
//   getInfo: function () {
//     console.log(`Привет, ${user.firstName} ${user.lastName} !!!`);
//   },
// };
// user.getInfo();
