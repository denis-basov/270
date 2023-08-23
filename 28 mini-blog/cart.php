<?php
// файл для показа состояния корзины покупателя

// начинаем сессию
session_start();

// подключаем бд
require 'server/db_connect.php';

// если массива с корзиной нет, создаем
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// получаем корзину из массива с сессией
$cart = $_SESSION['cart'];

/**
 * 1
 */
/*
// преобразовываем массив в строку
$cartStr = implode(", ", $cart);
//print_r($cartStr);

// выборка товаров из корзины из БД
$query = "SELECT id, title, price
            FROM products
            WHERE id IN ($cartStr);";
$statement = $pdo->query($query, PDO::FETCH_ASSOC);
$products = $statement->fetchAll();
print_r($products);*/

/**
 * 2
 */
$query = "SELECT id, title, price
            FROM products
            WHERE id = ?;";
// подготовка            
$statement = $pdo->prepare($query);

// массив для данных из БД
$products = [];
// объявляем переменную для расчета итоговой суммы по всем товарам
$totalPrice = 0;

// перебираем массив с корзиной
foreach ($cart as $productId) {
    // выполнение подготовленного запроса
    $statement->execute([$productId]);
    // забираем данные из объекта
    $product = $statement->fetch();
    // кладем полученные данные из БД в массив
    array_push($products, $product);
    // добавляем цену текущего товара в итоговую сумму
    $totalPrice += $product['price'];
}
//print_r($products);
// echo $totalPrice;


// и отображение на странице
require 'components/header.php';
?>

<!-- вывод товаров из корзины -->
<div class="container">
    <h2>Корзина</h2>
    <div class="cart-products">
        <?php foreach ($products as $product) : ?>
            <div class="cart-product">
                <h4><?= $product['title'] ?></h4>
                <div class="quantity">
                    <button class="plus btn btn-secondary rounded">+</button>
                    <span class="count">1</span>
                    <button class="minus btn btn-secondary rounded">-</button>
                </div>
                <div>
                    <h3>Цена: <?= $product['price']; ?> руб.</h3>
                    <p>Цена за единицу: <?= $product['price']; ?> руб.</p>
                </div>
            </div>
        <?php endforeach; ?>
        <h3>Итого: <?= $totalPrice ?> руб.</h3>
        <h3 id="total-js">Итого JS: </h3>
        <button type="button" class="btn btn-primary">Оформить заказ</button>
    </div>
</div>
<script>
    /**
     * увеличение / уменьшение кол-ва товара
     */
    // увеличение
    let plusBtns = document.querySelectorAll('.plus');

    plusBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // максимальное кол-во товара на складе
            let qtyAvail = 5;

            // получаем количество относительно кнопки плюс
            let qtyEl = btn.nextElementSibling;
            // получаем текст из элемента с базовой ценой текущего товара
            let priceText = btn.parentElement.nextElementSibling.children[1].textContent;
            // получаем из текста цену
            let price = +priceText.split(' ')[3];

            // получаем текст из элемента с сумарной ценой по товару
            let totalPriceText = btn.parentElement.nextElementSibling.children[0].textContent;

            // если кол-во меньше, чем в наличии на складе
            if (+qtyEl.textContent < qtyAvail) {
                // увеличиваем текущее значение кол-ва на 1 и кладем в переменную
                let count = ++qtyEl.textContent;
                // умножаем текущее кол-во на цену
                let totalPrice = price * count;

                // меняем старую цену по позиции на актуальную
                let totalPriceArr = totalPriceText.split(' '); // разбиваем на массив
                totalPriceArr[1] = totalPrice; // заменяем в массиве старую цену на новую
                let totalPriceStr = totalPriceArr.join(' '); // объединяем массив в строку

                // вставляем актуальную цену в элемент на странице
                btn.parentElement.nextElementSibling.children[0].textContent = totalPriceStr;

                // при каждом клике получаем элементы с ценой
                // получаем из элементов с ценой суммарную цену каждой позиции
                // суммируем все цены
                // выводим в документ в раздел с итоговой ценой
                pricesHeaders.forEach(function(element) {
                    console.log(element.textContent);
                })
            }
        });
    });

    // уменьшение
    let minusBtns = document.querySelectorAll('.minus');

    minusBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // получаем количество относительно кнопки минус 
            let qtyEl = btn.previousElementSibling;

            // если кол-во больше нуля
            if (+qtyEl.textContent > 1) {
                // уменьшаем текущее значение кол-ва на 1
                qtyEl.textContent--;
            }
        })
    });


    /**
     * расчет итоговой цены
     */
    // получаем заголовки с ценами 
    let pricesHeaders = document.querySelectorAll('.cart-products .cart-product h3');
    // получаем элемент для вставки итоговой суммы
    let totaPriceEl = document.querySelector('#total-js');

    // получаем из NodeList массив
    pricesHeaders = [...pricesHeaders];
    // получаем итоговую цену
    let price = pricesHeaders.reduce(function(sum, element) {
        // получаем текст заголовков
        let priceText = element.textContent;
        // получаем из текста цену
        let price = +priceText.split(' ')[1];
        // добавляем стоимость текущего товара в сумму
        return sum + price;
    }, 0);

    // добавляем итоговую цену в документ
    totaPriceEl.insertAdjacentHTML('beforeend', price + ' руб.');
</script>
<?php
// подключаем подвал сайта
require 'components/footer.php';
?>