// скрипт для получения и отображения всех юзеров из БД
let usersEl = document.querySelector("#users");

// функция для формирования из массива строки с юзерами и вывода в документ
function showUsers(users) {
  // преобразуем массив объектов в строку
  let output = users.reduce(function (acc, user) {
    return (
      acc +
      ` <div class="user">
            <img src="${user.avatar}" alt="${user.login}">    
            <p>Логин: ${user.login}</p>
            <p>Емейл: ${user.email}</p>
        </div>`
    );
  }, "");
  console.log(output);

  // выводим строку в документ
  usersEl.insertAdjacentHTML("beforeend", output);
}

// отправляем запрос на получение пользователей на сервер
async function getUsers() {
  let response = await fetch(`server/get_all_users.php`);

  let users = await response.json();
  console.log(users);

  // вызываем функцию для вывода юзеров в документ
  showUsers(users);
}
getUsers();
