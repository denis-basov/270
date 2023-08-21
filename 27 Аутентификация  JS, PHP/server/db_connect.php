<?php
// подключение к БД

// данные для подключения к БД
$db_name = '270_news-authors';
$host = 'localhost';
$login = 'root';
$password = '';
$dsn = "mysql:dbname=$db_name;host=$host";

try {
    // создаем объект соединения с БД
    $pdo = new PDO($dsn, $login, $password);
} catch (PDOException $error) {
    die('<h1>Произошла ошибка при подключении к Базе данных</h1>');
}
