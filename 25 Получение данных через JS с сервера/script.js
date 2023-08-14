// получаем контейнер для вставки данных
let newsContainer = document.querySelector("#news-container");

/**
 * формируем строку из массива объектов и выводим в документ
 */
function showNewsList(newsList) {
  // формируем массив строк из массива объектов
  let output = newsList
    .map(function (newsItem) {
      // обрезаем текст новости до 100 символов
      newsItem.text = newsItem.text.slice(0, 100) + "<a href='#'>...</a>";

      // формируем строку для вывода на страницу
      return `
        <div class="news-item">
            <div class="news-info">
                <img src="${newsItem.image}" alt="${newsItem.title}">
                <div class="news-text">
                    <h2>${newsItem.title}</h2>
                    <p>${newsItem.text}</p>
                    <p>${newsItem.add_date}</p>
                    <a href="#">Подробнее</a>
                </div>
            </div>
            <div class="author-info">
                <a href="#" class="author-info-link">
                    <img src="${newsItem.avatar}" alt="${newsItem.first_name + " " + newsItem.last_name}">
                    <span>${newsItem.first_name + " " + newsItem.last_name}</span>
                </a>   
            </div>
        </div>
    `;
    })
    .join("");

  console.log();
  newsContainer.insertAdjacentHTML("beforeend", output);
}

/**
 * запрос на сервер для получения новостей
 */
async function getNewsList() {
  // отправляем GET запрос на наш сервер
  let response = await fetch("server/news.php");

  let data = await response.json();
  console.log(data);

  showNewsList(data);
}
getNewsList();
