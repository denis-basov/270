<?php

/**
 * страница просмотра списка новостей
 */

// подключаю файл с соединением с бд
require 'db_connect.php';

// текст запроса на получение данных о новостях и авторах
$query = "SELECT news.id AS news_id, title, image, 
            authors.id AS author_id, first_name, last_name
            FROM news, authors
            WHERE author_id = authors.id
            ORDER BY add_date DESC;";

// отправляем запрос к БД на получение данных
$statement = $pdo->query($query, PDO::FETCH_ASSOC); // объект класса PDOStatement
// забираем данные из объекта класса PDOStatement
$news = $statement->fetchAll();
//debug($news);

// подключаем шаблон для отображения списка новостей
require 'views/news_temp.php';
