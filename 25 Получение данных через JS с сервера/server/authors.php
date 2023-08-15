<?php

// подключение к бд
require 'db_connect.php';

// текст запроса на получение данных об авторах
$query = "SELECT first_name, last_name, avatar FROM authors;";

// отправляем запрос к БД на получение данных
$statement = $pdo->query($query, PDO::FETCH_ASSOC);

// забираем данные из объекта класса PDOStatement
$authors = $statement->fetchAll();
//print_r($authors);

// кодируем в строку JSON
echo json_encode($authors);
