<?php

require 'db_connect.php';

// текст запроса на получение данных о новостях и авторах
$query = "SELECT news.id AS news_id, title, text, add_date, image, 
            authors.id AS author_id, first_name, last_name, avatar
            FROM news, authors
            WHERE author_id = authors.id
            ORDER BY add_date DESC;";

// отправляем запрос к БД на получение данных
$statement = $pdo->query($query, PDO::FETCH_ASSOC); // объект класса PDOStatement
// забираем данные из объекта класса PDOStatement
$news = $statement->fetchAll();

//print_r($news);

// кодируем в строку JSON
echo json_encode($news);
