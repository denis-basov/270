<?php

/**
 * страница детального просмотра конкретного автора
 */
// подключаю файл с соединением с бд
require 'db_connect.php';

// print_r($_GET);
// echo '<h2>' . $_GET['id'] . '</h2>';

// получаем идентификатор автора
$id = (int)$_GET['id'];

// если id === 0, выводим ошибку
if ($id === 0) {
    die('Неверный идентификатор');
}

// получить по переданному ID подробную инфу об авторе из БД
$query = "SELECT id, first_name, last_name, biography, avatar
		  FROM authors
          WHERE id=$id;";
// отправляем запрос к БД на получение данных
$statement = $pdo->query($query, PDO::FETCH_ASSOC); // объект класса PDOStatement
// забираем данные из объекта класса PDOStatement
$result = $statement->fetch();
// debug($result);

// разбиваем биографию на параграфы
$result['biography'] = str_replace("\r\n\r\n", '</p><p>', $result['biography']);

// подключаю шаблон для вывода автора на страницу
require 'views/author_detail_temp.php';
