// получаем элементы для ввода логина и вывода ошибки
let loginEl = document.querySelector("#login");
let loginError = document.querySelector("#login-error");

loginEl.addEventListener("blur", function () {
  // получаем введенное значение в переменную
  let value = loginEl.value;

  // проверяем на длину строки
  if (value.length < 5) {
    // выдаем ошибку
    console.log("Логин должен быть не менее 5 символов");
    loginError.textContent = "Логин должен быть не менее 5 символов";
  }
});
