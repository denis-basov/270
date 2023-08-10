<?php
// подключение а БД

// данные для подключения к БД
$db_name = '270_news-authors';
$host = 'localhost';
$login = 'root';
$password = '';
$dsn = "mysql:dbname=$db_name;host=$host";

try{
	// создаем объект соединения с БД
	$pdo = new PDO($dsn, $login, $password);
}catch(PDOException $error){
	print $error->getMessage();
}

function debug($value){
    echo '<pre>';
    print_r($value);
    echo '</pre>';
}