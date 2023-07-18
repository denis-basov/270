// массивы

// let cats = ["Барсик", "Мурка", "Тимоха", "Антоха", "Толик"];
// const users = ["Иван", "Анна", "Ирина", "Петр"];
// let nums = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2];
// let random = [44, "hello", null, undefined, true, 0, "", [1, 2, 3]];
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

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
// let user = {
//   firstName: "Иван",
//   lastName: "Иванов",
//   age: 22,
//   hobby: "Читать",
//   country: "Россия",
// };
//console.log(user);

//console.log(user.firstName, user.age, user.hobby);

// let car = {
//   model: 2101,
//   maker: "ВАЗ",
//   color: "красный",
//   weight: 1100,
//   power: 99,
//   "made-year": 1990,
//   drive() {
//     console.log(`Модель: ${this.model}, производитель: ${this.maker}.`);
//   },
// };

//car.drive();
//console.log(car);

// Мой автомобиль: модель - 2101, производитель - ВАЗ, цвет кузова - красный
//console.log(`Мой автомобиль: модель - ${car.model}, производитель - ${car.maker}, цвет кузова - ${car.color}`);
// console.log(`Мой автомобиль: модел - ${car.model}, производитель - ${car.maker}, цвет кузова - ${car.color}`);

// console.log(car["made-year"]);

// let prop = "model";
// console.log(car[prop]);

// let car = {
//   model: 2101,
//   maker: "ВАЗ",
//   color: "красный",
//   weight: 1100,
//   power: 99,
//   madeYear: 1990,
//   complectation: ["Базовая", "Комфорт", "Бизнес"],
// };

// Сформируйте строку: 'Автомобиль: 2101 доступен в комплектациях: Базовая, Комфорт, Бизнес'
// console.log(`Автомобиль ${car.maker} ${car.model} доступен в комплектациях: ${car.complectation[0]}, ${car.complectation[1]}, ${car.complectation[2]}.`);
// console.log(`Автомобиль: ${car.model} доступен в комплектациях: ${car.complectation[0]}, ${car.complectation[1]}, ${car.complectation[2]}`);
// console.log(`Автомобиль ${car.model} доступен в комплектациях ${car.complectation[0]} ${car.complectation[1]} ${car.complectation[2]}`);

// let user = {
//   firstName: "Иван",
//   lastName: "Иванов",
//   age: 22,
//   hobby: ["Читать", "Спать", "Гулять"],
//   country: "Россия",
//   isAdmin: false,
// };

//let hobby = ["Читать", "Спать", "Гулять"];

// console.log(hobby[1]);
// console.log(user.hobby[1]);

// +=, -=, /=, *=
//let cats = 6;

// cats = cats + 4;
// cats += 4;

// cats = cats - 3;
// cats -= 3;

//console.log(cats);

// let dogs = 5;

// dogs = dogs + 1;
// dogs += 1;
// dogs++; // добавляем 1
// dogs--; // вычитаем 1
// console.log(dogs);

//
// student.exams.midterm;

// let whereAmI = async function () {
//   // https://restcountries.com/v3.1/all
//   let response = await fetch(`https://restcountries.com/v3.1/all`); // получаем объект с удаленного сервера
//   //console.log(response);

//   let data = await response.json(); // раскодируем данные
//   console.log(data);
// };
// whereAmI();

// let user = {
//   firstName: "Иван",
//   lastName: "Иванов",
//   age: 22,
//   hobby: ["Читать", "Спать", "Гулять"],
//   isAdmin: false,
//   address: {
//     country: "Россия",
//     city: "Пермь",
//     street: "Пушкина",
//     house: 44,
//   },
// };
// let userInfo = `Имя: ${user.firstName}.
//                 Хобби: ${user.hobby.join(", ")}
//                 Адрес: Страна: ${user.address.country}, г. ${user.address.city},
//                        ул. ${user.address.street}, д. ${user.address.house}.`;
// //console.log(userInfo);

/*******************************************/

// let domVDerevne = {
//   materialWall: "woods",
//   floor: 3,
//   windows: 5,
//   materialRoof: "metal",
//   adress: {
//     city: "Okunevo",
//     street: "Cenralnaya",
//     dom: 36,
//   },
// };
// Сформируйте строку: Мой дом в деревне: Материал стен: woods, материал крыши: metal
// окон: 5, этажей: 3. Адрес: Okunevo, ул. Cenralnaya 36

// console.log(`Мой дом в деревне: Материал стен: ${domVDerevne.materialWall}, материал крыши: ${domVDerevne.materialRoof}
// окон: ${domVDerevne.windows}, этажей: ${domVDerevne.floor}. Адрес: ${domVDerevne.adress.city}, ул. ${domVDerevne.adress.street} ${domVDerevne.adress.dom}.`);

// let home = `Мой дом в деревне: Материал стен: ${domVDerevne.materialWall}, материал крыши: ${domVDerevne.materialRoof}, окон ${domVDerevne.windows}, этажей ${domVDerevne.floor}, Адрес: ${domVDerevne.adress.city}, ${domVDerevne.adress.street}, ${domVDerevne.adress.dom}`;

// console.log(home);
// document.write(home);

let user = {
  firstName: "Иван",
  lastName: "Иванов",
  age: 22,
  hobby: ["Читать", "Спать", "Гулять"],
  isAdmin: true,
  avatar: "images/ivanov.jpg",
  address: {
    country: "Россия",
    city: "Пермь",
    street: "Пушкина",
    house: 44,
  },
};
// let admin = "";
// if (user.isAdmin) {
//   admin = "Да";
// } else {
//   admin = "Нет";
// }

// сформировать разметку для вывода в документ
let userInfo = `
    <div class="user">
      <div class="avatar">
        <img src="${user.avatar}" alt="${user.firstName} ${user.lastName}">
      </div>

      <div class="user-info">
        <h2>${user.firstName} ${user.lastName}</h2>
        <h3>Возраст: ${user.age}</h3>
        <p>Хобби: ${user.hobby.join(", ")}</p>
        <p>Админ: ${user.isAdmin ? "Да" : "Нет"}</p>
        <div class="address">
          <h4>Адрес:</h4>
          <p>Страна: ${user.address.country}</p>
          <p>Город: ${user.address.city}</p>
          <p>Улица: ${user.address.street}</p>
          <p>Дом: ${user.address.house}</p>
        </div>
      </div>
    </div>
`;
// console.log(userInfo);
// document.write(userInfo);

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

// let prop = "last_name";
// console.log(authors[1][prop]);

// console.log(`Имя: ${authors[3].first_name}, фамилия: ${authors[3].last_name}.`);

let authorsStr = `
  <div class="authors">
    <div class="author">
      <h2>Имя: ${authors[0].first_name}, фамилия: ${authors[0].last_name}.</h2>
    </div>
    <div class="author">
      <h2>Имя: ${authors[1].first_name}, фамилия: ${authors[1].last_name}.</h2>
    </div>
    <div class="author">
      <h2>Имя: ${authors[2].first_name}, фамилия: ${authors[2].last_name}.</h2>
    </div>
    <div class="author">
      <h2>Имя: ${authors[3].first_name}, фамилия: ${authors[3].last_name}.</h2>
    </div>
    <div class="author">
      <h2>Имя: ${authors[4].first_name}, фамилия: ${authors[4].last_name}.</h2>
    </div>
    <div class="author">
      <h2>Имя: ${authors[5].first_name}, фамилия: ${authors[5].last_name}.</h2>
    </div>                     
  </div>
`;
document.write(authorsStr);
