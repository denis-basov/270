<?php
// удаление заказа из БД

// подключение БД
require 'db_connect.php';

// получаем ID заказа
$orderId = $_GET['orderId'];

// запрос на удаление заказа
$query = "DELETE FROM orders 
          WHERE id = $orderId";
$pdo->query($query);

// перенаправляем в ЛК
header('Location: /cabinet.php');
