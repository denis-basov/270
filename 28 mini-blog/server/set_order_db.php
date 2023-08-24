<?php
// файл для сохранения информации о заказах в БД

// начинаем сессию
session_start();

// подключаем бд
require 'db_connect.php';

// забираем данные из массива $_GET
$userId = $_GET['user_id'];
$totalPrice = $_GET['total_price'];

// добавляем в таблицу с заказами новый заказ
$query = "INSERT INTO orders (user_id, total_price) 
            VALUES($userId, $totalPrice)";
$statement = $pdo->query($query);

// если заказ сохранился
if ($statement) {
    // удаляем товары из корзины
    $_SESSION['cart'] = [];
    // отправляем клиенту истину
    echo json_encode(true);
} else {
    echo json_encode(false);
}
