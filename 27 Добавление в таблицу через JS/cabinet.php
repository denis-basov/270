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
$query = "SELECT login, email, password, avatar
          FROM users;";

// вывести в документ
// добавить ссылку на выход с сайта
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Личный кабинет</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mb-5">
                <p>ID пользователя: <?php echo $_SESSION['id']; ?></p>
                <h2>Привет, <?php echo $_SESSION['valid_user']; ?></h2>
                <a href="/">На главную</a>
                <a href="exit.php" class="bg-danger p-2">Выход</a>
            </div>
        </div>
    </div>
</body>

</html>