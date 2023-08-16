// блокировка кнопки отправки формы

// 1
let regForm = document.querySelector("#reg-form"); // получаем форму
regForm.addEventListener("submit", function (event) {
  event.preventDefault(); // отменяем отправку
});

// let submitBtn = document.querySelector("#submit-btn");// получаем кнопку отправки формы
// submitBtn.disabled = true; // блокируем кнопку для проверки ввода

/**
 * проверка логина
 */
// получаем элементы для ввода логина и вывода ошибки
let loginEl = document.querySelector("#login");
let loginError = document.querySelector("#login-error");

// функция проверки логина по БД на уникальность
async function checkLoginDB(login) {
  // отправляем GET запрос на сервер и передаем введенный логин
  let response = await fetch(`server/check_form_data.php?login=${login}`);
  //console.log(response);

  let data = await response.json();

  // только после получения данных от сервера
  // вызываем функцию, которая проверяет введенное значение
  // включая полученные данные от сервера
  checkLogin(login, data.taken);
}

// функция для проверки логина
function checkLogin(login, loginTaken) {
  if (login.length < 5) {
    // выдаем ошибку
    loginError.textContent = "Логин должен быть не менее 5 символов";
  } else if (loginTaken) {
    // если такой логин уже существует в бд
    // выводим ошибку
    loginError.textContent = "Такой логин уже зарегистрирован";
  } else {
    loginError.textContent = "";
  }
}

// при покидании фокуса проверяем введенное значение
loginEl.addEventListener("blur", function () {
  // получаем введенное значение в переменную
  let value = loginEl.value;

  checkLoginDB(value);
});

/**
 * проверка емейла
 */
// получаем элементы для ввода емейла и вывода ошибки
let emailEl = document.querySelector("#email");
let emailError = document.querySelector("#email-error");

function checkEmail(email, emailTaken) {
  // если строка с емейлом пустая
  if (email.length === 0) {
    emailError.textContent = "Укажите адрес электронной почты";
  } else if (!email.includes("@")) {
    // если в адресе нет собаки
    emailError.textContent = "Адрес электронной почты должен содержать '@'";
  } else if (emailTaken) {
    emailError.textContent = "Указанный адрес уже зарегистрирован";
  } else {
    emailError.textContent = "";
  }
}

// функция для проверки емейла по БД
async function checkEmailDB(email) {
  let response = await fetch(`server/check_form_data.php?email=${email}`);
  let data = await response.json();
  console.log(data);

  checkEmail(email, data.taken);
}

// обработчик события blur поля ввода емейла
emailEl.addEventListener("blur", function () {
  let value = emailEl.value;

  checkEmailDB(value);
});

/**
 * проверка пароля
 */
// получаем элементы для ввода пароля и вывода ошибки
let passwordEl = document.querySelector("#password");
let passwordError = document.querySelector("#password-error");

// обработчик события blur поля ввода пароля
passwordEl.addEventListener("blur", function () {
  let value = passwordEl.value;

  // проверка на длину пароля (нее менее 6)
  if (value.length < 6) {
    // выводим в спан ошибку
    passwordError.textContent = "Пароль не может быть короче шести символов";
    // меняем цвет границы инпута на красный
    passwordEl.classList.add("input-error");
    passwordEl.classList.remove("input-success");
  } else {
    // если заполнено верно, очищаем спан с ошибкой
    passwordError.textContent = "";
    // меняем цвет границы на зеленый
    passwordEl.classList.add("input-success");
    passwordEl.classList.remove("input-error");
  }
});

/**
 * показать пароль при клике на элемент #type-btn
 */
let typeBtn = document.querySelector("#type-btn");

// при клике на элемент
typeBtn.addEventListener("click", function () {
  // если значение атрибуту = password
  // заменить на text
  // если значение атрибута = text
  // заменить на password
  passwordEl.setAttribute("type", "text");
});
