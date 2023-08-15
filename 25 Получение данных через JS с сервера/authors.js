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
function showAuthorsList(authors) {
  // из массива объектов формируем массив строк через map, после, с пом. join из массива строк получем строку
  let output = authors
    .map(function (author) {
      return `
      <div class="author">
        <img src="${author.avatar}" alt="${author.first_name + " " + author.last_name}">
        <h2>${author.first_name + " " + author.last_name}</h2>
      </div>
    `;
    })
    .join("");
  console.log(output);

  // вставляем сформированную строку в контейнер на страницу
  authorsContainer.insertAdjacentHTML("beforeend", output);
}

/**
 * запрос на сервер для получения массива с авторами
 */
async function getAuthorsList() {
  // запрос на сервер для получения данных об авторах
  let response = await fetch("server/authors.php");
  console.log(response);

  // получаем массив объектов с авторами
  let authors = await response.json();
  console.log(authors);

  // вызываем функцию для отображения авторов в документе
  showAuthorsList(authors);
}
getAuthorsList();
