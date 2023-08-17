<?php
// страница личного кабинета пользователя
session_start();


// подключаем бд
// получаем все данные о пользователе из БД по ID 
// вывести в документ
// добавить ссылку на выход с сайта
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Личный кабинет</title>
</head>

<body>
    <p>ID пользователя: <?php echo $_SESSION['id']; ?></p>
    <h2>Привет,</h2>

</body>

</html>