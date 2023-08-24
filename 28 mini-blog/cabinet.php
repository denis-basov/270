<?php
// страница личного кабинета пользователя
session_start();

// если не авторизован
if (!isset($_SESSION['valid_user'])) {
    // перенаправляем на главную страницу
    header('Location: /');
}

// подключаем бд
require 'server/db_connect.php';

// получаем все данные о пользователе из БД по ID 
$query = "SELECT id, login, email, password, avatar
          FROM users
          WHERE id=$_SESSION[id];";
$statement = $pdo->query($query, PDO::FETCH_ASSOC);
$user = $statement->fetch();
//print_r($user);

/**
 * получаем информацию о заказах текущего клиента
 */
$query = "SELECT orders.id, login, email, total_price, add_date, status
            FROM orders, users
            WHERE user_id = users.id 
            AND user_id = $_SESSION[id];";
$statement = $pdo->query($query);
$orders = $statement->fetchAll();



require 'components/header.php';
?>

<div class="container">
    <div class="row">
        <div class="col-md-8 mb-5">
            <h2>Привет, <?php echo $user['login']; ?></h2>
            <img src="<?php echo $user['avatar']; ?>" alt="<?php echo $user['login']; ?>">
            <h4>Ваш адрес электронной почты: <?php echo  $user['email']; ?></h4>
            <h4>Ваш пароль: <?php echo  $user['password']; ?></h4>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 mb-5">
            <div class="orders">
                <div class="order order-header">
                    <span>ID</span>
                    <span>Логин</span>
                    <span>Емейл</span>
                    <span>Сумма</span>
                    <span>Дата</span>
                    <span>Статус</span>
                </div>
                <?php foreach ($orders as $index => $order) : ?>
                    <div class="order order-<?= $index + 1; ?> <?= $index % 2 === 0 ? 'back' : '' ?>">
                        <span><?= $order['id'] ?></span>
                        <span><?= $order['login'] ?></span>
                        <span><?= $order['email'] ?></span>
                        <span><?= $order['total_price'] . ' руб.' ?></span>
                        <span><?= $order['add_date'] ?></span>
                        <span><?= $order['status'] ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>

<?php
// подключаем подвал сайта
require 'components/footer.php';
?>