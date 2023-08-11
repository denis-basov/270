<?php
// подключение а БД

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
    die('<h1>Произошла ошибка при подключении к Базе данных</h1>
        <p>Обновите страницу позже. При повторении ошибки свяжитесь с нами по телефону 003</p>');
    // echo '<hr>Сообщение: ' . $error->getMessage();
    // echo '<hr>Код ошибки: ' . $error->getCode();
    // echo '<hr>Строка: ' . $error->getLine();
    // echo '<hr>Файл: ' . $error->getFile();
    // die();
}

function debug($value)
{
    echo '<pre>';
    print_r($value);
    echo '</pre>';
}
