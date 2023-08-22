<?php
// добавление товара в корзину

// начинаем сессию
session_start();

// получаем ID товара 
$productId = $_GET['productId'];

// если массива с корзиной нет, создаем
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// добавляем в массив с корзиной ID товара 
array_push($_SESSION['cart'], $productId);

// возвращаемся на страницу магазина
header('Location: /shop.php');
