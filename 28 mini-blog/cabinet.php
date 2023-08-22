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
</div>

<?php
// подключаем подвал сайта
require 'components/footer.php';
?>