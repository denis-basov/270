<?php

// подключение к бд
require 'db_connect.php';

$query = "SELECT first_name, last_name, avatar FROM authors;";

$statement = $pdo->query($query, PDO::FETCH_ASSOC);
$authors = $statement->fetchAll();
//print_r($authors);

// кодируем в строку JSON
echo json_encode($authors);
