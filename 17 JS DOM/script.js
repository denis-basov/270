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

// замена текста
let pressBtn = document.querySelector("#press-btn");
let head1 = document.querySelector("#head-1");
let head2 = document.querySelector("#head-2");

pressBtn.addEventListener("click", function () {
  let text2 = head2.textContent;
  head1.textContent = text2;
});
