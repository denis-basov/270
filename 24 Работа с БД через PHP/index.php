<?php

/**
 * страница со списком авторов
 */

// подключаю файл с соединением с бд
require 'db_connect.php';

// пишем текст запроса на выборку
$query = "SELECT id, first_name, last_name, short_info, avatar
		  FROM authors;";

// отправляем запрос к БД на получение данных
$statement = $pdo->query($query, PDO::FETCH_ASSOC); // объект класса PDOStatement
// забираем данные из объекта класса PDOStatement
$result = $statement->fetchAll();
//debug($result);

// подключаю шаблон для вывода авторов на страницу
require 'views/authors_temp.php';
