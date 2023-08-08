<?php
// require 'functions.php'
function debug($value)
{
    echo '<pre>';
    print_r($value);
    echo '</pre>';
}
// debug($_POST);
// var_dump($_POST);
// получаю из массива POSY логин пользоваителя
$login = $_POST['login'];
$email = $_POST['email'];
$password = $_POST['password'];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>

<body>
    <div class="user-info">
        <h2>Добро пожаловать, <?php echo $login; ?>!</h2>
        <p>Ваш адрес электронной почты: <?= $email; ?></p>
        <p>Ваш пароль: <?= $password; ?></p>
    </div>
</body>

</html>