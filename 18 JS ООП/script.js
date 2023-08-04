/*
// процедурный подход
let userName = "Ivan";
let age = 22;
let hobby = "Reading";

function sayHello(name) {
  console.log(`Hello, ${name}`);
}
//sayHello(userName);
// console.log(sayHello);

// ооп
let user = {
  // свойства
  userName: "Ivan",
  age: 22,
  hobby: "Reading",
  // методы
  sayHello() {
    console.log(`Hello, ${this.userName}`);
  },
  getInfo() {
    return `<div class="user">
                <p>My name is ${this.userName}.</p>
                <p>Age: ${this.age}.</p>
                <p>Hobby: ${this.hobby}.</p>
            </div>`;
  },
};

// user.sayHello();
// console.log(user.getInfo());

let users = document.querySelector(".users");
users.insertAdjacentHTML("beforeend", user.getInfo());

// передаем метод как значение
// let getUserInfo = user.getInfo;
// console.log(getUserInfo());

// users.insertAdjacentHTML("beforeend", getUserInfo());
*/

/*
// сокращенные свойства
let title = "Lorem ipsum dolor sit.";
let description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sed iure facere? Eius nobis laudantium illo atque fugiat, voluptate illum?";

let newsItem = {
  title,
  description,
};
console.log(newsItem);
console.log(newsItem.title);*/

/*
let user = {
  firstName: "Ivan",
  lastName: "Ivanov",
  getInfo: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getInfo());
*/

/*
let user = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 22,
  getInfo() {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  },
  addAge(value) {
    this.age += value;
  },
  addOneToAge() {
    this.age++;
  },
};

// user.addAge(10);
user.addOneToAge();
console.log(user.getInfo());*/

/*
let user = {
  firstName: "Ivan",
  lastName: "Ivanov",
  getInfo() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getInfo());

// передаю метод как значение
let func = user.getInfo;
console.log(func());*/

/////////////////////////////////////////////////////////////////////////////////////////////
// ES6 Классы

/*
// создаем класс Person
class Person {
  sayHello() {
    console.log("Hello");
  }
}

// создаем новый объект (экземпляр) класса Person
let user1 = new Person();
let user2 = new Person();

// console.log(user1);
user1.sayHello();
user2.sayHello();
console.log([1, 2, 3]);

user1.firstName = "Ivan";
console.log(user1);
*/

// класс с конструктором
class Person {
  // магический метод, который вызывается при создании объекта
  constructor(ava, fName, lName, bYear) {
    this.avatar = ava;
    this.firstName = fName;
    this.lastName = lName;
    this.birthYear = bYear;
  }

  sayHello() {
    console.log(`Привет, ${this.firstName}`);
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear; // 2023
  }

  getSummary() {
    return `<div class="user">
                <img src="${this.avatar}" alt="${this.firstName} ${this.lastName}">
                <p>Имя: ${this.firstName}.</p>
                <p>Фамилия: ${this.lastName}.</p>
                <p>Возраст: ${this.getAge()}.</p>
            </div>`;
  }
}

// let users = [];
// users.push(new Person("Анна", "Иванова", 1999));

// создаем объекты
let user1 = new Person(
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "Анна",
  "Иванова",
  1999
);
let user2 = new Person(
  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "Сергей",
  "Петров",
  2005
);
let user3 = new Person(
  "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
  "Ирина",
  "Петрова",
  1990
);

// добавляем объекты в массив
let users = [user1, user2, user3];
console.log(users);

// формируем массив строк из массива объектов
let outputArr = users.map(function (user) {
  return user.getSummary();
});

// получаем контейнер со страницы
let usersEl = document.querySelector(".users");
// объединяем массив строк в строку и вставляем в контейнер
usersEl.insertAdjacentHTML("beforeend", outputArr.join(""));
