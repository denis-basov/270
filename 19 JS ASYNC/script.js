/*
// рекурсия
let counter = 0;

function sayHello() {
  console.log(counter);
  counter++;
  if (counter === 100) return;
  sayHello();
}

sayHello();
*/

/*
function getSum(num1, num2) {
  return num1 + num2;
}

function outer(num1, num2) {
  let res = getSum(num1, num2);
  console.log(res);
}

outer(4, 6);
// стек вызовов
// 0.
// 1. outer
// 2. outer, getSum
// 3. outer
// 4.
*/

/*
// setTimeout
console.log("1 вызов");
setTimeout(function () {
  console.log("2 вызов");
}, 2000);
console.log("3 вызов");
*/

/**
 *
 * получение данных через асинхронный GET запрос
 * и отображение данных на странице
 *
 */
// получаем контейнер для вставки данных
let posts = document.querySelector(".posts");

// оформление данных
function showInfo(data) {
  let output = data
    .map(function (item) {
      return `
      <div class="post">
        <h2>${item.title}</h2>
        <p>${item.body}</p>
      </div>
    `;
    })
    .join("");

  // выводим сформированную строку в контейнер
  posts.insertAdjacentHTML("beforeend", output);
}

// асинхронный запрос
let getInfo = async function () {
  // отправляем GET запрос на внешний сервер
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  // получаем из объекта данные в понятном JS формате
  let data = await response.json();

  // формируем и выводим данные в документ
  showInfo(data);
};

getInfo();
