/**
 * обработка данных формы регистрации
 */

// изначально полагаем, что все поля заполнены неправильно
let flags = {
  login: false,
  email: false,
  password: false,
};

// блокировка кнопки отправки формы
let regForm = document.querySelector("#reg-form"); // получаем форму
regForm.addEventListener("submit", function (event) {
  // если хотя бы одно свойство имеет значение ложь, блокируем отправку
  if (!flags.login || !flags.email || !flags.password) {
    event.preventDefault(); // отменяем отправку
  }
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
  flags.login = false;

  if (login.length < 5) {
    // выдаем ошибку
    loginError.textContent = "Логин должен быть не менее 5 символов";
  } else if (loginTaken) {
    // если такой логин уже существует в бд
    // выводим ошибку
    loginError.textContent = "Такой логин уже зарегистрирован";
  } else {
    // если попали сюда, значит логин введен верно
    loginError.textContent = ""; // очищаем поле с ошибкой
    flags.login = true; // переключаем флаг с логином
  }
}

// при покидании фокуса проверяем введенное значение
loginEl.addEventListener("blur", function () {
  // получаем введенное значение в переменную
  let value = loginEl.value.trim();

  checkLoginDB(value);
});

/**
 * проверка емейла
 */
// получаем элементы для ввода емейла и вывода ошибки
let emailEl = document.querySelector("#email");
let emailError = document.querySelector("#email-error");

function checkEmail(email, emailTaken) {
  flags.email = false;

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
    flags.email = true;
  }
}

// функция для проверки емейла по БД
async function checkEmailDB(email) {
  let response = await fetch(`server/check_form_data.php?email=${email}`);
  let data = await response.json();

  checkEmail(email, data.taken);
}

// обработчик события blur поля ввода емейла
emailEl.addEventListener("blur", function () {
  let value = emailEl.value.trim();

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
  let value = passwordEl.value.trim();
  // меняем флаг на ложь
  flags.password = false;

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
    // меняем флаг на истину
    flags.password = true;
  }
});

/**
 * показать пароль при клике на элемент .type-btn
 */
let typeBtn = document.querySelectorAll(".type-btn");
console.log(typeBtn);

typeBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let sibling = btn.previousElementSibling.previousElementSibling;
    // если значение атрибута = password
    if (sibling.getAttribute("type") === "password") {
      // заменить на text
      sibling.setAttribute("type", "text");
      btn.textContent = "Скрыть пароль";
    } else {
      // если значение атрибута = text
      // заменить на password
      sibling.setAttribute("type", "password");
      btn.textContent = "Показать пароль";
    }
  });
});

/**
 * обработка данных формы входа
 */
// предпорагаем, что логин введен неверно
let enterLoginFlag = false;

let enterForm = document.querySelector("#enter-form"); // получаем форму входа

// обработка события отправки формы
enterForm.addEventListener("submit", function (event) {
  // если логин введен неверно
  if (!enterLoginFlag) {
    event.preventDefault(); // блокируем отправку формы входа
  }
});

let enterLogin = document.querySelector("#enter-login"); // получаем логин
let enterLoginError = document.querySelector("#enter-login-error"); // получаем спан для ошибки

async function enterCheckLoginDB(login) {
  enterLoginFlag = false;

  // отправляем GET запрос на сервер и передаем введенный логин
  let response = await fetch(`server/check_form_data.php?login=${login}`);
  //console.log(response);

  let data = await response.json();

  // если логин не найден в БД
  if (!data.taken) {
    // выдаем ошибку о том, что логин неверен
    enterLoginError.textContent = "Логин не найден в базе данных";
  } else {
    enterLoginError.textContent = "";
    enterLoginFlag = true;
  }
  console.log(enterLoginFlag);
}

// при блюре инпута
enterLogin.addEventListener("blur", function () {
  // получаем введенное значение и удаляем пробелы
  let value = enterLogin.value.trim();

  // проверяем введенный логин по БД
  enterCheckLoginDB(value);
});
