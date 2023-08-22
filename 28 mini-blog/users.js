// скрипт для получения и отображения всех юзеров из БД
let usersEl = document.querySelector("#users");

// функция для формирования из массива строки с юзерами и вывода в документ
function showUsers(users) {
  // преобразуем массив объектов в строку
  let output = users.reduce(function (acc, user) {
    // получаем значение атрибута, в котором хранится инфа об авторизации клиента
    let auth = document.querySelector("body").dataset.validUser;

    return (
      acc +
      ` <div class="user">
            <img src="${user.avatar}" alt="${user.login}">    
            <p>Логин: ${user.login}</p>
            <p>Емейл: ${user.email}</p>
            ${auth === "да" ? `<button type="button" data-user-id="${user.id}" class="btn btn-success add-to-friends">Добавить в друзья</button>` : ``}
        </div>`
    );
  }, "");

  // выводим строку в документ
  usersEl.insertAdjacentHTML("beforeend", output);
}

// отправляем запрос на получение пользователей на сервер
async function getUsers() {
  let response = await fetch(`server/get_all_users.php`);

  let users = await response.json();

  // вызываем функцию для вывода юзеров в документ
  showUsers(users);

  /**
   * добавление пользователя в список друзей
   */
  // получаем все кнопки
  let addToFriendsBtns = document.querySelectorAll(".user .add-to-friends");

  // перебираем кнопки
  addToFriendsBtns.forEach(function (btn) {
    // накаждую кнопку вешаем обработчик события по клику
    btn.addEventListener("click", function () {
      // получаем ID юзера из дата-атрибута кнопки
      let friendId = btn.dataset.userId;
      console.log(friendId);

      // отправляем запрос на сервер для добавления ID выбранного пользователя
      // в список друзей
      // let res = fetch(`server/add_to_friends_list.php?friendId=${friendId}`)
      // let friends = [22, 43, 12, 34, 65];
    });
  });
}
getUsers();
