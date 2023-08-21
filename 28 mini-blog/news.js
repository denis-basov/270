// получаем контейнер для новостей
let mainNewsContainer = document.querySelector("#main-news-container");

// формирование разметки и вывод в документ
function showNewsList(newsList) {
  let output = newsList.reduce(function (acc, newsItem) {
    return (
      acc +
      `
    <div class="col-lg-4 mb-4">
        <div class="entry2">
            <a href="single.html"><img src="${newsItem.image}" alt="${newsItem.title}" class="img-fluid rounded"></a>
            <div class="excerpt">
                
                <h2><a href="single.html">${newsItem.title}</a></h2>
                <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 mr-3 float-left">
                        <img src="${newsItem.avatar}" alt="${newsItem.first_name} ${newsItem.last_name}" class="img-fluid">
                    </figure>
                    <span class="d-inline-block mt-1"><a href="#">${newsItem.first_name} ${newsItem.last_name}</a></span>
                    <span>&nbsp;-&nbsp; ${newsItem.add_date}</span>
                </div>

                <p>${newsItem.text.slice(0, 150)}...</p>
                <p><a href="#">Подробнее...</a></p>
            </div>
        </div>
    </div>
    `
    );
  }, "");

  mainNewsContainer.insertAdjacentHTML("beforeend", output);
}

// отправляем запрос на сервер для получения новостей
async function getNewsList() {
  let response = await fetch(`server/news.php`);
  let newsList = await response.json();

  showNewsList(newsList);
}
getNewsList();
