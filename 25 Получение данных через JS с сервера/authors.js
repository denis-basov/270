// IIFE (Immediately Invoked Function Expression)
/*(function () {
  let authorsContainer = document.querySelector("#authors-container");
  console.log(authorsContainer);

  // если элемента нет, прекращаем работу функции
  if (!authorsContainer) return;

  authorsContainer.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
})();*/

// получаем контейнер с авторами для вставки данных
let authorsContainer = document.querySelector("#authors-container");

/**
 * формируем строку с авторами и отображаем на странице
 */
function showAuthorsList(authors) {}

/**
 * запрос на сервер для получения массива с авторами
 */
async function getAuthorsList() {
  // запрос на сервер для получения данных об авторах
  let response = await fetch("server/authors.php");
  console.log(response);

  let authors = await response.json();
  console.log(authors);

  showAuthorsList(authors);
}
getAuthorsList();
