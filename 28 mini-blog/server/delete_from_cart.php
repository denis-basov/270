<?php
// удаление товара из корзины

// начинаем сессию
session_start();

// получаем ID удаляемого из корзины товара
$productId = $_GET['productId'];

// echo "Удаление товара ID: $productId из массива";
// print_r($_SESSION['cart']);

// получаем индекс товара в массиве
$index = array_search($productId, $_SESSION['cart']);
// удаляем элемент
unset($_SESSION['cart'][$index]);

// возвращаем клиента на страницу с корзиной
header('Location: /cart.php');
