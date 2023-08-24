/**
 *
 * увеличение стоимости при нажатии на '+'
 *
 */
// получаем все кнопки '+'
let plusBtns = document.querySelectorAll(".plus");

plusBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // максимальное кол-во товара на складе
    let qtyAvail = 5;

    // получаем количество относительно кнопки плюс
    let qtyEl = btn.nextElementSibling;
    // получаем текст из элемента с базовой ценой текущего товара
    let priceText = btn.parentElement.nextElementSibling.children[1].textContent;
    // получаем из текста цену за единицу товара
    let price = +priceText.split(" ")[3];

    // получаем текст из элемента с сумарной ценой по товару
    let totalPriceText = btn.parentElement.nextElementSibling.children[0].textContent;

    // если кол-во меньше, чем в наличии на складе
    if (+qtyEl.textContent < qtyAvail) {
      // увеличиваем текущее значение кол-ва на 1 и кладем в переменную
      let count = ++qtyEl.textContent;
      // умножаем текущее кол-во на цену
      let totalPrice = price * count;

      // меняем старую цену по позиции на актуальную
      let totalPriceArr = totalPriceText.split(" "); // разбиваем на массив
      totalPriceArr[1] = totalPrice; // заменяем в массиве старую цену на новую
      let totalPriceStr = totalPriceArr.join(" "); // объединяем массив в строку

      // вставляем актуальную цену в элемент на странице
      btn.parentElement.nextElementSibling.children[0].textContent = totalPriceStr;

      /**
       * получаем итоговую стоимость покорзине и выводим в документ
       */
      price = pricesHeaders.reduce(function (sum, element) {
        // получаем текст заголовков
        let priceText = element.textContent;
        // получаем из текста цену
        let price = +priceText.split(" ")[1];
        // добавляем стоимость текущего товара в сумму
        return sum + price;
      }, 0);

      // добавляем итоговую цену в документ
      totalPriceEl.innerHTML = `Итого JS: ${price} руб.`;
    }
  });
});

/**
 *
 * уменьшение стоимости при нажатии на '-'
 *
 */
let minusBtns = document.querySelectorAll(".minus");

minusBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // получаем количество относительно кнопки минус
    let qtyEl = btn.previousElementSibling;

    // получаем текст из элемента с базовой ценой текущего товара
    let priceText = btn.parentElement.nextElementSibling.children[1].textContent;

    // получаем из текста цену за единицу товара
    let price = +priceText.split(" ")[3];

    // получаем текст из элемента с сумарной ценой по товару
    let totalPriceText = btn.parentElement.nextElementSibling.children[0].textContent;

    // если кол-во больше нуля
    if (+qtyEl.textContent > 1) {
      // уменьшаем текущее значение кол-ва на 1 и кладем в переменную
      let count = --qtyEl.textContent;

      // умножаем текущее кол-во на цену
      let totalPrice = price * count;

      // меняем старую цену по позиции на актуальную
      let totalPriceArr = totalPriceText.split(" "); // разбиваем на массив
      totalPriceArr[1] = totalPrice; // заменяем в массиве старую цену на новую
      let totalPriceStr = totalPriceArr.join(" "); // объединяем массив в строку

      // вставляем актуальную цену в элемент на странице
      btn.parentElement.nextElementSibling.children[0].textContent = totalPriceStr;

      /**
       * получаем итоговую стоимость покорзине и выводим в документ
       */
      price = pricesHeaders.reduce(function (sum, element) {
        // получаем текст заголовков
        let priceText = element.textContent;
        // получаем из текста цену
        let price = +priceText.split(" ")[1];
        // добавляем стоимость текущего товара в сумму
        return sum + price;
      }, 0);

      // добавляем итоговую цену в документ
      totalPriceEl.innerHTML = `Итого JS: ${price} руб.`;
    }
  });
});

/**
 *
 * расчет итоговой цены
 *
 */
// получаем заголовки с ценами
let pricesHeaders = document.querySelectorAll(".cart-products .cart-product h3");
// получаем элемент для вставки итоговой суммы
let totalPriceEl = document.querySelector("#total-js");

// получаем из NodeList массив
pricesHeaders = [...pricesHeaders];
// получаем итоговую цену
let price = pricesHeaders.reduce(function (sum, element) {
  // получаем текст заголовков
  let priceText = element.textContent;
  // получаем из текста цену
  let price = +priceText.split(" ")[1];
  // добавляем стоимость текущего товара в сумму
  return sum + price;
}, 0);

// добавляем итоговую цену в документ
totalPriceEl.insertAdjacentHTML("beforeend", price + " руб.");

/**
 *
 * Отправка заказа на сервер
 *
 *
 */
let setOrder = document.querySelector("#set-order"); // получаем кнопку отправки заказа

/**
 * отправка информации о заказе на сервер
 */
async function sendOrder(userId, totalPrice) {
  let response = await fetch(`server/set_order_db.php?user_id=${userId}&total_price=${totalPrice}`);
  let data = await response.json();
  console.log(data);

  // если запись заказа в БД прошла без ошибок
  if (data) {
    // перенаправляем клиента на страницу ЛК
    window.location.href = `cabinet.php`;
  } else {
    alert("При оформлении заказа произошла ошибка");
  }
}

// добавляем обработчик по клику
setOrder.addEventListener("click", function () {
  // получаем из документа строку с суммой за весь заказ
  let totalPriceStr = totalPriceEl.textContent;
  // получаем итоговую сумму заказа
  let totalPrice = +totalPriceStr.split(" ")[2];

  // получаем ID текущего пользователя
  let userId = +document.body.getAttribute("data-user-id");

  // отправка данных о заказе на сервер
  sendOrder(userId, totalPrice);
});
