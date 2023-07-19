// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
// const users = ["Иван", "Анна", "Ирина", "Петр"];
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let random = [44, "hello", null, undefined, true, 0, "", [1, 2, 3]];
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// циклы
// от 0 до 6
// let num = 0; // начальное состояние
// while (num < 6) {
//   console.log(num);
//   num += 2;
// }
// console.log("Конец цикла");

// let num = 10; // начальное состояние
// while (num >= 3) {
//   console.log(num);
//   num--;
// }

// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// console.log(fruits);

// 0 1 2 3 4 5
// let i = 0;
// while (i <= 5) {
//   console.log(fruits[i]);
//   i++;
// }

// let i = 0;
// while (i <= 5) {
//   if (fruits[i] === "Кокос") {
//     console.log("Кокос найден");
//   }
//   i++;
// }

// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// console.log(pets);
// let i = 0;
// while (i < 9) {
//   console.log(pets[i]);
//   i++;
// }

// let i = 0;
// while (i <= 8) {
//   console.log(pets[i]);
//   i++;
// }

// let i = 0;
// while (i < pets.length) {
//   console.log(pets[i]);
//   i++;
// }

// let i = 0;
// let arrLen = pets.length;// получаем длину массива
// while (i < arrLen) {
//   console.log(pets[i]);
//   i++;
// }

// let num = 0; // начальное состояние
// while (num < 6) {
//   console.log(num);
//   num++;
// }

// for (let num = 0; num < 6; num++) {
//   console.log(num);
// }

// for (let num = 10; num >= 3; num--) {
//   console.log(num);
// }

// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];

// let i = 0;
// while (i < pets.length) {
//   console.log(pets[i]);
//   i++;
// }

// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }

// let str = "hello, summer!!!";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let phones = [
//   ["234560", "347890", "234974"],
//   ["345677", "237756", "894534", "234534", "367324"],
//   ["345246", "234534", "367324"],
//   ["457457", "453467", "345267", "347890"],
// ];

// console.log(phones);
// for (let i = 0; i < phones.length; i++) {
//   // console.log(phones[i]);
//   console.log("Внешний цикл, итерация " + (i + 1));

//   for (let j = 0; j < phones[i].length; j++) {
//     console.log(phones[i][j]);
//   }
// }

//let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);

//   if (animals[i] === "duck") {
//     console.log("Утка найдена!!!");
//     break; // прерываем цикл
//   }
// }

// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// for (let i = 2; i < animals.length; i++) {
//   if (animals[i] === "duck") {
//     console.log("Утка найдена!");
//     break; // Прерываем, если дальше тоже нет "утки".
//   }
//   console.log(animals[i + 1]);
// }

// for (let i = 0; i < animals.length; i++) {
//   if (animals[i] === "duck") {
//     console.log(animals[i]);
//     console.log("Утка найдена!");
//     break; // Прерываем, если дальше тоже нет "утки".
//   }
// }

// let animals = ["ant", "duck", "bison", "camel", "duck", "elephant", "cat", "duck", "dog", "duck"];

// // считаем уток в массиве
// let ducksCount = 0;
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i] === "duck") {
//     ducksCount++;
//     // console.log(ducksCount);
//   }
// }
// console.log(ducksCount);

// let bills = [
//   [234560, 347890, 234974],
//   [345677, 237756, 894534, 234534, 367324],
//   [345246, 234534, 367324],
//   [457457, 453467, 345267, 347890],
// ];

// let sum = 0;
// for (let i = 0; i < bills.length; i++) {
//   for (let j = 0; j < bills[i].length; j++) {
//     sum = sum + bills[i][j];
//   }
// }
// console.log(sum);

//let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 4, 2, 5, 7];

// посчитать сумму элементов массива
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   // sum = sum + nums[i];
//   sum += nums[i];
//   //console.log(`i: ${i}. nums[i]: ${nums[i]}. sum: ${sum}`);
// }
// console.log(sum);

// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
// получите из массива строку 'Барсик Мурка Тимоха Антоха Толик'

// let sum = "";
// for (let i = 0; i < cats.length; i++) {
//   sum += cats[i];
// }
// console.log(sum);

// let result = "";
// for (let i = 0; i < cats.length; i++) {
//   if (i === 0) {
//     // если первый элемент
//     result += cats[i]; //добавляем без пробела
//   } else {
//     // если остальные
//     result += ", " + cats[i]; // то добавляем пробел
//   }
// }
// console.log(result);

// получить произведение элементов массива
// let nums = [0, 4, 2, 0, 3, 4, 5, 0, 7, 5, 4, 3, 0, 2];

// let multiple = 1;
// for (let i = 0; i < nums.length; i++) {
//   multiple = multiple * nums[i];
// }
// console.log(multiple);

// let multiple = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (i === 0) {
//     multiple = nums[i];
//   } else {
//     multiple = multiple * nums[i];
//   }
// }
// console.log(multiple);

// let multiple = 1;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === 0) {
//     // пропустить значение
//     continue;
//   }
//   multiple = multiple * nums[i];
// }
// console.log(multiple);

// let multiple = 1;
// for (let i = 0; i < nums.length; i++) {
//   // если элемент массива не равен 0, умножаем
//   if (nums[i] !== 0) {
//     multiple = multiple * nums[i];
//   }
// }
// console.log(multiple);

let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];

// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }
// for (let cat of cats) {
//   console.log(cat);
// }

// let bills = [
//   [234560, 347890, 234974],
//   [345677, 237756, 894534, 234534, 367324],
//   [345246, 234534, 367324],
//   [457457, 453467, 345267, 347890],
// ];

// let sum = 0;
// for (let i = 0; i < bills.length; i++) {
//   for (let j = 0; j < bills[i].length; j++) {
//     sum = sum + bills[i][j];
//   }
// }
// console.log(sum);

// let sum = 0;
// for (let billRow of bills) {
//   for (let bill of billRow) {
//     sum += bill;
//   }
// }
// console.log(sum);

// let i = 0;
// for (let cat of cats) {
//   console.log(cat);
//   i++;
// }
