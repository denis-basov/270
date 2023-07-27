// перебирающие методы массивов, которые принимают как агрумент
// функцию обратного вызова (call-back)

// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
// let users = ["Иван", "Анна", "Ирина", "Петр"];
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

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

// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// let newAnimals = animals.map(function (animal) {
//   return animal.toUpperCase();
// });
// console.log(newAnimals);

// let newAnimals = animals.map((animal) => animal.toUpperCase());
// console.log(newAnimals);

let authors = [
  {
    author_id: 1,
    first_name: "Иван",
    last_name: "Бунин",
  },
  {
    author_id: 2,
    first_name: "Лев",
    last_name: "Толстой",
  },
  {
    author_id: 3,
    first_name: "Александр",
    last_name: "Пушкин",
  },
  {
    author_id: 4,
    first_name: "Федор",
    last_name: "Достоевский",
  },
  {
    author_id: 5,
    first_name: "Максим",
    last_name: "Горький",
  },
  {
    author_id: 6,
    first_name: "Николай",
    last_name: "Гоголь",
  },
];

// получить массив с фамилиями авторов
// в переменную author помещаются все элементы массива поочередно (объекты)
// let authorsLastNames = authors.map(function (author) {
//   return author.last_name;
// });
// console.log(authorsLastNames);

// let authorsLastNames = authors.map(function (author, index) {
//   return `<p class="author author-${index + 1}">${author.first_name} ${author.last_name}</p>`;
// });
// document.write(authorsLastNames.join(""));

// let authorsLastNames = authors.map(function (author, index) {
//   if (index % 2 === 0) {
//     return `<p style="background: aquamarine">${author.first_name} ${author.last_name}</p>`;
//   } else {
//     return `<p style="background: beige">${author.first_name} ${author.last_name}</p>`;
//   }
// });
// document.write(authorsLastNames.join(""));

// let authorsLastNames = authors.map(function (author, index) {
//   if (index % 2 === 0) {
//     return `<p class="group-1 author-${index + 1}">${author.first_name} ${author.last_name}</p>`;
//   } else {
//     return `<p class="group-2 author-${index + 1}">${author.first_name} ${author.last_name}</p>`;
//   }
// });
// document.write(authorsLastNames.join(""));

// let shopItems = [
//   {
//     item: "book",
//     qty: 5,
//     price: 200,
//   },
//   {
//     item: "table",
//     qty: 3,
//     price: 1000,
//   },
//   {
//     item: "PC",
//     qty: 1,
//     price: 3000,
//   },
//   {
//     item: "chair",
//     qty: 2,
//     price: 1500,
//   },
// ];
/*
// сформируйте массив с итоговой ценой по каждой позиции
// [200,6000,3000]
let sumPrice = shopItems.map(function (product) {
  return product.qty * product.price;
});
console.log(sumPrice);

// посчитать общую сумму к оплате за товары в массиве
let cartSum = 0;
sumPrice.forEach(function (item) {
  cartSum += item;
});
console.log(cartSum);
*/

// получить массив с ценой по каждой позиции и наименованием товара
// [{book: 1000}, {table: 3000}...]
// let sumPrice = shopItems.map(function (product) {
//   return `${product.item}:${product.price * product.qty}`;
// });
// console.log(sumPrice);

// стрелочные функции
// function privet(name) {
//   console.log(`Привет, ${name ?? "Пользователь"}`);
// }
// privet("Иван");

// функциональное выражение
// let privet = function (name) {
//   console.log(`Привет, ${name ?? "Пользователь"}`);
// };
// privet("Иван");

// стрелочная функция
// let privet = (name) => {
//   console.log(`Привет, ${name ?? "Пользователь"}`);
// };
// privet("Иван");

// let privet = (name) => {
//   return `Привет, ${name ?? "Пользователь"}`;
// };
// console.log(privet("Иван"));

// let privet = (name) => `Привет, ${name ?? "Пользователь"}`;
// console.log(privet("Иван"));

//2 задание
// function countNum(num1 = 0, num2 = 0) {
//   return num1 + num2;
// }
//перепишите под синтаксис стрелочной функции
// let countNum = (num1 = 0, num2 = 0) => num1 + num2;
// console.log(countNum(4, 5));

// let countNum = (num1 = 0, num2 = 0) => num1 + num2;
// console.log(countNum(5, 5));

// Императивный подход (как) - пошаговая инструкция для интерпретатора что и как делать
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// Декларативный подход (что) - указываете ЧТО нужно сделать, а как это сделать скрыто
// fruits.forEach((fruit) => console.log(fruit));

let cats = ["Барсик", "Том", "Тимоха", "Толик", "Мурка", "Антоха"];
let users = ["Иван", "Анна", "Ирина", "Петр"];
let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// find
// найти первый элемент, длина строки которого меньше 6
// let found = cats.find(function (cat) {
//   return cat.length < 6;
// });
// console.log(found);

// получить первый товар суммарная стоимость позиции которого больше 5000
// let found = shopItems.find(function (product) {
//   return product.qty * product.price > 5000;
// });
// console.log(found);

// filter
// получить животных, длина строки которых больше 3
// let longPets = pets.filter(function (pet) {
//   return pet.length > 3;
// });
// console.log(pets);
// console.log(longPets);

let shopItems = [
  {
    item: "book",
    qty: 5,
    price: 200,
    inStock: true,
  },
  {
    item: "table",
    qty: 3,
    price: 1000,
    inStock: true,
  },
  {
    item: "PC",
    qty: 1,
    price: 3000,
    inStock: true,
  },
  {
    item: "chair",
    qty: 2,
    price: 1500,
    inStock: true,
  },
];
// получите все товары, которые заказаны в количестве от 2 штук
// let orderedGoods = shopItems.filter(function (product) {
//   return product.qty > 2;
// });
// console.log(orderedGoods);

// let qtyItems = shopItems.filter(function (check) {
//   return check.qty >= 2;
// });
// console.log(qtyItems);

// every
// проверить перед оформлением, все ли товары в наличии
// let isAllProductsInStock = shopItems.every(function (product) {
//   return product.inStock;
// });
// console.log(isAllProductsInStock);

// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// true если в массиве тольк числа
// let isAllNumbers = nums.every(function (num) {
//   return typeof num === "number";
// });
// console.log(isAllNumbers);

// let cats = ["Барсик", "Том", "Тимоха", "Толик", "Мурка", "Антоха"];
// let users = ["Иван", "Анна", "Ирина", "Петр"];
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

/*
function checkLength(item, index, arr) {
  return item.length > 3;
}

let res1 = cats.some(checkLength);
console.log(res1);

let res2 = users.some(checkLength);
console.log(res2);

let res3 = fruits.some(checkLength);
console.log(res3);
*/

// reduce
// получаем сумму элементов массива
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
let sum = nums.reduce(function (acc, currVal) {
  //console.log(`acc: ${acc}. currVal: ${currVal}. return: ${acc + currVal}`);
  return acc + currVal;
});
console.log(sum);

let sum1 = animals.reduce(function (acc, currVal) {
  //console.log(`acc: ${acc}. currVal: ${currVal}. return: ${acc + currVal}`);
  return acc + currVal + " ";
});
console.log(sum1);
