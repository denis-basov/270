// перебирающие методы массивов, которые принимают как агрумент
// функцию обратного вызова (call-back)

let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
let users = ["Иван", "Анна", "Ирина", "Петр"];
let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

/**
 * foreach
 */
// cats.forEach(function (cat, index) {
//   let str = `<h2>Индекс: ${index}. Значение: ${cat}.</h2>`;
//   console.log(str);
//   document.write(str);
// });

// for (let cat of cats) {
//   console.log(cat);
// }

// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// примените на массиве метод foreach. и сформируйте строку для каждого элемента

// 1
// fruits.forEach(function (fruit, index) {
//   let str = `<h2>Индекс: ${index}. Значение: ${fruit}</h2>`;
//   console.log(str);
//   document.write(str);
// });

// 2
// fruits.forEach(function (fru, index) {
//   let str = `<h3>Сегодня фруктовая корзина состоит из фрукта ${fru} под номером ${index + 1}<h3>`;
//   document.write(str);
// });

// 3
// fruits.forEach(function (fruit, index) {
//   let str = `<h2>Название фрукта: ${fruit}; и его индекс: ${index}</h2>`;
//   document.write(str);
// });

// 4
// fruits.forEach(function (fruit, index) {
//   let str = `<p>Значение: ${fruit}, Индекс: ${index}.</p>`;
//   console.log(str);
// });

// сумма элементов
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let sum = 0;
// nums.forEach(function (num) {
//   sum += num;
// });
// console.log(sum);

// получение массива ни основе исходного массива
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// let animalsPars = ["<p>ant</p>", "<p>bison</p>", "<p>camel</p>", "<p>duck</p>", "<p>elephant</p>", "<p>cat</p>", "<p>dog</p>"];

// 1 Объявляю новый массив, в который буду складывать значения
// 2 При переборе изменяю значение каждого элемента
// и добавляю в новый массив

// let animalsPars = [];
// animals.forEach(function (animal) {
//   animalsPars.push(`<p>${animal}</p>`);
// });
// console.log(animalsPars);

/**
 * map
 */
// let animalsPars = animals.map(function (animal) {
//   return `<p>${animal}</p>`;
// });
// console.log(animalsPars);
