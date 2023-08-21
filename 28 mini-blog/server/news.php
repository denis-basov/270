<?php
// файл для работы с новостями

require 'db_connect.php';

$query = "SELECT news.id AS news_id, title, text, add_date, image,
            authors.id AS author_id, first_name, last_name, avatar
            FROM news, authors
            WHERE author_id = authors.id
            ORDER BY rand()
            LIMIT 9;";
$statement = $pdo->query($query, PDO::FETCH_ASSOC);
$newsList = $statement->fetchAll();

//print_r($newsList);

echo json_encode($newsList);
