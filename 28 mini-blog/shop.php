<?php
// страница с каталогом товаров

// начинаем сессию
session_start();

// подключаем бд
require 'server/db_connect.php';

// получаем фанные о товарах из бд
$query = "SELECT id, title, price
            FROM products;";
$statement = $pdo->query($query, PDO::FETCH_ASSOC);
$products = $statement->fetchAll();
//print_r($products);

require 'components/header.php';
?>

<div class="container">
    <div class="products">
        <?php foreach ($products as $product) : ?>
            <div class="product">
                <h4><?= $product['title']; ?> <?= $product['id']; ?></h4>
                <h3>Цена: <?= $product['price']; ?> руб.</h3>

                <!-- если пользователь авторизован -->
                <?php if (isset($_SESSION['valid_user'])) : ?>
                    <a href="server/add_to_cart.php?productId=<?= $product['id']; ?>" class="btn btn-warning text-light">В корзину</a>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<?php
// подключаем подвал сайта
require 'components/footer.php';
?>