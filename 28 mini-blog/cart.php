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
 * 1 получаем на основании массива $cart данные из БД
 * по каждому товару
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
        <button id="set-order" type="button" class="btn btn-primary">Оформить заказ</button>
    </div>
</div>
<script src="js/cart.js"></script>
<?php
// подключаем подвал сайта
require 'components/footer.php';
?>