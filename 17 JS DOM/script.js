// getElementById

// получаем заголовок по идентификатору
// let head1 = document.getElementById("head-1");
// head1.textContent = "Hello, summer";
// console.dir(head1);

// let user = document.getElementById("users");
// user.textContent = "MaxUser";

// console.log(user);

// let head2 = document.getElementById("head-2");
// console.log(head2);

// getElementsByTagName
// let h2Elements = document.getElementsByTagName("h2");
// console.log(h2Elements);

// let liElements = document.getElementsByTagName("li");
// console.log(liElements);
// liElements[1].textContent = "Сыр";

// let liElements = document.getElementsByTagName("li");
// liElements[1].textContent = "Мармелад";

// console.log(liElements[1].textContent);
// liElements[1].textContent = "Клубника";

// заменить тект в элементах списка на произвольный
// let liElements = document.getElementsByTagName("li");
// console.log(liElements);

// for (let li of liElements) {
//   li.textContent = "Мармелад";
// }

// getElementsByClassName
// let heads = document.getElementsByClassName("head");
// console.log(heads[1].textContent);
// heads = [...heads]; // получаем из коллекции элементов массив

// heads.forEach((element) => {
//   console.log(element.textContent);
// });

// q u e r y S e l e c t o r - выборка ОДНОГО элемента по CSS селектору

// выборка по тегу
// let image = document.querySelector("img");
// console.log(image);

// выборка по классу
// let head = document.querySelector(".head");
// console.log(head);

// выборка по ID
// let head3 = document.querySelector("#head-3");
// console.log(head3.textContent);

// выборка по селектору .users .user h2
// let userHead = document.querySelector(".users .user h2");
// console.log(userHead);

// let user = document.querySelector("#users .user");
// console.log(user);

// let listFood = document.querySelector(".list li");
// listFood.textContent = "Апельсин";

// let liElements = document.querySelector(".list li");
// console.log(liElements);
// liElements.textContent = "Апельсин";

// let elements = document.querySelector(".list li");
// console.dir(elements);

// elements.forEach((element) => {
//   element.textContent = element.textContent.replace("Хлеб", "Апельсин");
// });

// q u e r y S e l e c t o r A l l - выборка всех элементов по CSS селектору

/*
// получить элементы списка
let elements = document.querySelectorAll(".list li");
elements = [...elements]; // преобразовываем в простой массив
console.log(elements);

// сформировать из текстового содержимого элементов списка строку
// 1 вариант
// let elementsTexts = elements.map((element)=>element.textContent).join(", ");
// console.log(elementsTexts);
// 2 вариант
let elementsTexts = elements.reduce(function (acc, element, i) {
  // если это последний элемент, запятую не добавляем
  if (i === elements.length - 1) {
    return acc + element.textContent;
  } else {
    return acc + element.textContent + ", ";
  }
}, "");
console.log(elementsTexts);

// вывести на страницу в заготовленное место
// 1 получить элемент со страницы
let listText = document.getElementById("list-text");
// 2 разместить в нем полученный текст
listText.textContent = elementsTexts;
*/

// 3 задание
// получите первые два элемента списка с классом class="list"
// и поместите в список <ol class="o-list"></ol>

//1
// let listFood = document.querySelectorAll(".list li");
// let orderList = document.querySelector(".o-list");

// orderList.innerHTML = `<li>${listFood[0].textContent}</li><li>${listFood[1].textContent}</li>`;

//2
// let elements = document.querySelectorAll(".list li");
// elements = [...elements];

// let elementstexts = elements
//   .map(function (element) {
//     return element.textContent;
//   })
//   .splice(elements.length - 2, 3)
//   .join(", ");
// console.log(elementstexts);

// let orderList = document.querySelector(".o-list");
// orderList.textContent = elementstexts;

//3
// let iceElements = document.querySelectorAll(".list li");
// iceElements = [iceElements[1], iceElements[2]];
// console.log(iceElements);

// let iceElementsTexts = iceElements.reduce(function (acc, iceElement, i) {
//   if (i === iceElements.length - 1) {
//     return acc + iceElement.textContent;
//   } else {
//     return acc + iceElement.textContent + ", ";
//   }
// }, "");

// console.log(iceElementsTexts);

// let iceListText = document.querySelector(".o-list");

// iceListText.textContent = iceElementsTexts;

/**
 * события
 */
// let pressBtn = document.querySelector("#press-btn");

// pressBtn.addEventListener("click", function () {
//   console.log("Кнопка нажата");
// });

// 4 задание
// напишите код так, чтобы при нажатии на элемент с id="head-1"
// в консоль выводилось текстовое содержимое этого элемента
// let head1 = document.getElementById("head-1");
// console.log(head1);
// head1.addEventListener("click", function () {
//   console.log(head1.textContent);
// });

// let pressBtn = document.querySelector("#press-btn");

// function sayHello() {
//   console.log("hello");
// }

// pressBtn.addEventListener("click", sayHello);

// this
// let pressBtn = document.querySelector("#press-btn");
// pressBtn.addEventListener("click", function () {
//   console.log(this.textContent);
// });

// при нажатии на кнопку соединяем тексты заголовков и в консоль
// let pressBtn = document.querySelector("#press-btn");
// let head1 = document.querySelector("#head-1");
// let head2 = document.querySelector("#head-2");
// pressBtn.addEventListener("click", function () {
//   console.log(head1.textContent + " " + head2.textContent);
// });

// let pressBtn = document.querySelector("#press-btn");
// let head1 = document.querySelector("#head-1");
// let head2 = document.querySelector("#head-2");

// pressBtn.addEventListener("click", function () {
//   let text2 = head2.textContent;
//   head1.textContent = text2;
// });

/*
// замена текста
let pressBtn = document.querySelector("#press-btn");
let head1 = document.querySelector("#head-1");
let head2 = document.querySelector("#head-2");

pressBtn.addEventListener("click", function () {
  // сохраняем тект первого заголовка в переменную
  let text1 = head1.textContent;
  // берем текст второго заголовка и кладем в первый
  head1.textContent = head2.textContent;
  // записываем в текст второго заголовка данные из переменной text1
  head2.textContent = text1;
});
*/

// textContent, innerText, innerHTML
// let users = document.querySelector("#users");

// // console.log(users.textContent);
// // console.log(users.innerText);
// // console.log(users.innerHTML);
// users.innerHTML += `
//   <div class="user">
//     <h2>Имя: Анна</h2>
//     <h3>Фамилия: Петрова</h3>
//     <p>Возраст: 33 года</p>
//     <p>Хобби: Вязать</p>
//   </div>
// `;

// 1 задание
// добавьте в элемент с классом class="list" еще один элемент списка
// let listStuff = document.querySelector(".list");
// listStuff.innerHTML += `
// <li>Тыква</li>
// <li>Масло</li>
// <li>Вода</li>`;

// let addToList = document.querySelector(".list");
// addToList.innerHTML += `
// <li>Чай</li>
// <li>Кофе</li>
// <li>Слвки</li>
// `;

// let listX = document.querySelector(".list");
// listX.innerHTML += `
// <li>Соль</li>
// <li>Сахар</li>`;
// console.log(listX);

// value
// let head2 = document.querySelector("#head-2");
// console.log(head2.value);

// let submitBtn = document.querySelector("#submit-btn");
// console.log(submitBtn.value);

// let firstName = document.querySelector("#firstName");

// активация поля ввода
// firstName.addEventListener("focus", function () {
//   console.log("Поле активировано (focus)");
// });

// // деактивация поля ввода
// firstName.addEventListener("blur", function () {
//   console.log("Поле ДЕактивировано (blur)");
// });

// получение value при потере фокуса
let firstName = document.querySelector("#firstName");
let firstNameError = document.querySelector("#firstNameError");

firstName.addEventListener("blur", function () {
  // проверяем введенное пользователем значение
  if (firstName.value.length === 0) {
    // если ничего не введено, вывести сообщение об ошибке
    firstNameError.textContent = "Введите имя!";
    firstName.style.background = "rgb(250, 150, 150)";
  } else {
    // если введенные данные есть (строка не пустая), убираем сообщение об ошибке, если есть
    firstNameError.textContent = "";
    firstName.style.background = "rgb(203, 249, 194)";
  }
});

// 2 задание
// реализуйте проверку данных о фамилии
//1
// let lastName = document.querySelector("#lastName");
// let lastNameError = document.querySelector("#lastNameError");

// lastName.addEventListener("blur", function () {
//   if (lastName.value.length === 0) {
//     lastNameError.textContent = "Введите фамилию!";
//   } else {
//     lastNameError.textContent = "";
//   }
// });

//2
// let lastName = document.querySelector("#lastName");
// let lastNameError = document.querySelector("#lastNameError");

// lastName.addEventListener("blur", function () {
//   if (lastName.value.length === 0) {
//     lastNameError.textContent = "Введите фамилию!";
//   } else {
//     lastNameError.textContent = "";
//   }
// });

//3
let lastName = document.querySelector("#lastName");
let lastNameError = document.querySelector("#lastNameError");

lastName.addEventListener("focus", function () {});
lastName.addEventListener("blur", function () {
  if (lastName.value.length === 0) {
    lastNameError.textContent = "Введите Фамилию!";
    lastName.style.background = "rgb(250, 150, 150)";
  } else {
    lastNameError.textContent = "";
    lastName.style.background = "rgb(203, 249, 194)";
  }
});

// parentElement
// let user2 = document.querySelector(".user-2");
// console.log(user2.parentElement);

// children
// let list = document.querySelector(".list");
// console.log(list.children);
// console.log([...list.children]);

// nextSibling, nextElementSibling
// let head2 = document.querySelector("#head-2");
// console.log(head2.nextElementSibling);

// previousSibling, previousElementSibling
// console.log(head2.previousSibling.textContent);
// console.log(head2.previousElementSibling.textContent);
// console.dir(head2);

// style
// let head2 = document.querySelector("#head-2");

// задаем синий цвет текста заголовку
// console.log(head2.style);
// head2.style.color = "blue";
// head2.style.backgroundColor = "silver";
// head2.style.border = "3px solid green";

// 3 задание
// задайте произвольные стили элементу с class="users"
// let user = document.querySelector("#users");
// console.log(user.style);
// user.style.color = "pink";
// user.style.backgroundColor = "blue";

// let usersStyle = document.querySelector(".users");
// usersStyle.style.backgroundColor = "yellow";
// usersStyle.style.fontSize = "35px";

// let userStyle = document.querySelector(".users");
// userStyle.style.color = "rgb(58, 57, 136)";
// userStyle.style.backgroundColor = "rgb(222, 245, 245)";
// userStyle.style.borderRadius = "20px";
// userStyle.style.padding = "20px";

// let usersStyle = document.querySelector(".users");
// usersStyle.style.backgroundColor = "black";
// usersStyle.style.color = "white";
// usersStyle.style.border = "3px sold red";
// usersStyle.style.borderRadius = "10px";
// usersStyle.style.margin = "20px";
// usersStyle.style.padding = "20px";

// обработчик события в цикле
// получаем коллекцию элементов списка
// let liElements = document.querySelectorAll(".list li");
// console.log(liElements);

// // перебираем коллекцию
// liElements.forEach(function (li) {
//   // каждому элементу списка добавляем обработчик по клику
//   li.addEventListener("click", function () {
//     // при клике выводим в консоль текст элемента
//     console.log(li.textContent);

//     li.textContent = li.textContent.toUpperCase();
//     li.style.color = "blue";
//     li.style.background = "orange";
//     li.style.margin = "10px";
//     li.style.padding = "10px";
//   });
// });

// classList
let user1 = document.querySelector(".users .user-1");

// console.log(user1.classList[0]);
// console.log(user1.classList.value);
console.log(user1.classList);

user1.addEventListener("click", function () {
  // добавляем класс при клике на элемент
  // user1.classList.add("user-style");
  // удаляем класс у элемента
  // user1.classList.remove("user", "user-1");
  // проверка наличия класса у элемента
  // console.log(user1.classList.contains("user-1"));

  // если класс есть
  // if (user1.classList.contains("user-style")) {
  //   // удаляем класс
  //   user1.classList.remove("user-style");
  // } else {
  //   // если класса нет, добавляем
  //   user1.classList.add("user-style");
  // }

  user1.classList.contains("user-style") ? user1.classList.remove("user-style") : user1.classList.add("user-style");
});
