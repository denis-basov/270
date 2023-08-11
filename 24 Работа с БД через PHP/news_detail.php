<?php

/**
 * страница детального просмотра новости
 */

// подключаю файл с соединением с бд
require 'db_connect.php';

// получаем ID со страницы списка новостей из массива $_GET
$id = (int)$_GET['id'];

// если id === 0, выводим ошибку
if ($id === 0) {
    die('Неверный идентификатор');
}

// текст запроса на получение данных оо одной новост и ее авторе по ID новости
$query = "SELECT news.id AS news_id, title, text, add_date, image, 
            authors.id AS author_id, first_name, last_name, short_info, avatar
            FROM news, authors
            WHERE author_id = authors.id
            AND news.id=$id;";

// отправляем запрос к БД на получение данных
$statement = $pdo->query($query, PDO::FETCH_ASSOC); // объект класса PDOStatement
// забираем данные из объекта класса PDOStatement
$news_item = $statement->fetch();
debug($news_item);

require 'views/news_detail_temp.php';
