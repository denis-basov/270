// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
// let users = ["Иван", "Анна", "Ирина", "Петр"];
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let random = [44, "hello", null, undefined, true, 0, "", [1, 2, 3]];
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// push - добавляет элемент(ы) в конец массива

// let newLen = cats.push("Вайт");
// console.log(cats);
// console.log(newLen);

// добавьте 2 элемента в конец массива const users = ["Иван", "Анна", "Ирина", "Петр"];
// и выведите в консоль измененный массив и новую длину
// users.push("Коля", "Аня");
// users.push("Ваня", "Маня");
// users.push("Саша", "Федя");
// let newUsers = users.push("Петр", "Инна", "Сильвестр");
// console.log(users);
// console.log(newUsers);

// pop - удаляет последний элемент
// let delAnimal1 = animals.pop();
// let delAnimal2 = animals.pop();

// console.log(animals);
// console.log(delAnimal1);
// console.log(delAnimal2);

// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// удалите из массива Банан и Яблоко и добавьте в конец массива произвольное кол-во новых элементов

// fruits.pop();
// fruits.pop();
// fruits.push("Груша", "Арбуз");
// console.log(fruits);

// fruits.pop();
// fruits.pop();
// fruits.push("Пиво", "Коньяк", "Вобла");
// console.log(fruits);

// fruits.pop();
// fruits.pop();
// fruits.push("Манго", "Персик", "Помело");

// console.log(fruits);

// let del1 = fruits.pop();
// let del2 = fruits.pop();
// console.log(fruits);
// console.log(del1);
// console.log(del2);

// let add = fruits.push("Персик", "Папайя", "Маракуйя");
// console.log(fruits);
// console.log(add);

// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
// let users = ["Иван", "Анна", "Ирина", "Петр"];
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let random = [44, "hello", null, undefined, true, 0, "", [1, 2, 3]];
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// console.log(animals);
// animals.shift();
// console.log(animals);

// concat - объединение массивов

// let newArr = cats.concat(users);

// console.log(cats);
// console.log(users);
// console.log(newArr);

// let newArr = cats.concat(users, fruits, pets, animals, 1, 2, 3, 4, 5);
// console.log(newArr);

// includes() определяет, содержит ли массив определённый элемент,
// console.log(fruits.includes("Ананас"));

// indexOf
/*
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

let bison1index = beasts.indexOf('bison');// ищу индекс первого бизона - 1
let bison2index = beasts.indexOf('bison', bison1index+1) // ищу индекс второго бизона
console.log(bison2index);
*/

// reverse() на месте обращает порядок следования элементов массива.
// cats.reverse();
// console.log(cats);

// let user1 = "Иван";
// let user2 = user1;
// user1 = "Анна";

// console.log(user1);
// console.log(user2);

/*
let arr1 = [1, 2, 3];
let arr2 = arr1; // создается новая ссылка на тот же массив
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
*/
/*
let arr1 = [1, 2, 3];
let arr2 = arr1.concat();// создаем копию массива
arr1.push(4);

console.log(arr1);
console.log(arr2);
*/

let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
let users = ["Иван", "Анна", "Ирина", "Петр"];
let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
let random = [44, "hello", null, undefined, true, 0, "", [1, 2, 3]];
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// slice
// let newArr = users.slice(); // копируем весь массив
// console.log(newArr);

// let newArr = users.slice(1); // копируем массив начиная с инд 1 до конца массива
// console.log(newArr);

// let newArr = users.slice(1, 3); // копируем массив начитая с 1 инд ДО 3 индекса
// console.log(newArr);
// console.log(users);

// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// получите из исходного массива ["mouse", "pig", "goat", "sheep"]

// let newPets = pets.slice(3, 7);
// console.log(newPets);

// let newArr = pets.slice(3, -2);
// console.log(newArr);

/*
let start = pets.indexOf("mouse");
let end = pets.indexOf("sheep");
// console.log(start);
// console.log(end++);
let newPets = pets.slice(start, end + 1);
console.log(newPets);
*/

// цепочка методов
// let res = pets.slice(3, -2).concat(animals);
// res.push("Барсик", "Мурка");
// console.log(res);

// splice
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];

// let delFruits = fruits.splice(2); // вырезаем все элементы начиная с инд 2 до конца массива
// console.log("Исходный массив", fruits);
// console.log("Массив удаленных элементов", delFruits);

// let delFruits = fruits.splice(2, 2); // вырезаем 2 элемента начиная с инд 2
// console.log("Исходный массив", fruits);
// console.log("Массив удаленных элементов", delFruits);

/**
 * let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
получите из этого массива [5, 6, 7]
 */
// let result = nums.splice(4, 3);
// console.log(result);

// let result = nums.splice(-7, 3);
// console.log(result);

// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];

// let delFruits = fruits.splice(2, 0, "Алыча", "Слива"); // начиная со 2 инд удаляем 0 элементов и добавляем 2 новых элемента
// console.log("Исходный массив", fruits);
// console.log("Массив удаленных элементов", delFruits);

// let delFruits = fruits.splice(4, 1, "Алыча", "Слива"); // начиная со 4 инд удаляем 1 элемент и добавляем 2 новых элемента
// console.log("Исходный массив", fruits);
// console.log("Массив удаленных элементов", delFruits);
