<?php
// подключаем БД
require 'db_connect.php';

// забираем введенные пользователем данные из массива $_POST
$login = $_POST['login'];
$email = $_POST['email'];
$password = $_POST['password'];

// записываем данные в БД
$query = "INSERT INTO users(login, email, password)
          VALUES('$login', '$email', '$password');";

$statement = $pdo->query($query);
// print_r($statement);

// перенапрвавляем на главную страницу
header('Location: /');
