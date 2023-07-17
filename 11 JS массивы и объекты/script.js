// массивы

let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
const users = ["Иван", "Анна", "Ирина", "Петр"];
let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
let random = [44, "hello", null, undefined, true, 0, "", [1, 2, 3]];
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// console.log(cats);
// console.log(animals);

// console.log(pets.length);
// console.log(animals[3]);
// console.log(cats[3]);
// console.log(pets[6]);
// console.log(fruits[0]);

// получите значения: Мурка, Анна, undefined, Яблоко, cat, camel
// console.log(cats[1], users[1], random[3], fruits[5], pets[1], animals[2]);

// console.log(cats[1]);
// console.log(users[1]);
// console.log(random[3]);
// console.log(fruits[5]);
// console.log(pets[0]);
// console.log(animals[2]);

// console.log(cats[1], users[1], random[3], fruits[5], pets[0], animals[2]);

// let myPets = `Мои домашние животные: ${pets[2]}, ${pets[0]}, ${pets[8]}`;
// console.log(myPets);

// users[4] = "Антон";
// users[5] = "Татьяна";
// users[1] = "Том";
// console.log(users);

// получение последнего элемента массива
// fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// console.log(fruits);
// let lastIndex = fruits.length - 1; // 6
// console.log(fruits[lastIndex]);

// объекты
let user = {
  firstName: "Иван",
  lastName: "Иванов",
  age: 22,
  hobby: "Читать",
  country: "Россия",
};
//console.log(user);

//console.log(user.firstName, user.age, user.hobby);

let car = {
  model: 2101,
  maker: "ВАЗ",
  color: "красный",
  weight: 1100,
  power: 99,
  "made-year": 1990,
};
//console.log(car);

// Мой автомобиль: модель - 2101, производитель - ВАЗ, цвет кузова - красный
//console.log(`Мой автомобиль: модель - ${car.model}, производитель - ${car.maker}, цвет кузова - ${car.color}`);
// console.log(`Мой автомобиль: модел - ${car.model}, производитель - ${car.maker}, цвет кузова - ${car.color}`);

// console.log(car["made-year"]);

let prop = "model";
console.log(car[prop]);
