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

// вывести в документ

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
                <h2>Привет, <?php echo $user['login']; ?></h2>
                <img src="<?php echo $user['avatar']; ?>" alt="<?php echo $user['login']; ?>">
                <h4>Ваш адрес электронной почты: <?php echo  $user['email']; ?></h4>
                <h4>Ваш пароль: <?php echo  $user['password']; ?></h4>

                <a href="/">На главную</a>
                <a href="users.php">Список пользователей</a>
                <a href="exit.php" class="bg-danger p-2">Выход</a>
            </div>
        </div>
    </div>
</body>

</html>