<?php
require 'db_connect.php';

/**
 * файл проверяет данные, введенные в форме по БД
 */

// если запрос на проверку логина на уникальность
if (isset($_GET['login'])) {
    // забираем в переменную логин из массива $_GET
    $login = $_GET['login'];

    // проверить логин по БД на уникальность
    $query = "SELECT login 
              FROM users 
              WHERE login = '$login';";
    $statement = $pdo->query($query, PDO::FETCH_ASSOC);

    // получаем количество выбранных строк
    $rows = $statement->rowCount();

    // var_dump($rows);
    // если есть хотябы одно значение
    if ($rows > 0) {
        echo json_encode(['taken' => true]);
    } else {
        echo json_encode(['taken' => false]);
    }
}

// если запрос на проверку емейла на уникальность
if (isset($_GET['email'])) {

    // забираем емейл из массива $_GET
    $email = $_GET['email'];

    // проверить емейл по БД на уникальность
    $query = "SELECT email 
              FROM users 
              WHERE email = '$email';";

    $statement = $pdo->query($query, PDO::FETCH_ASSOC);
    // получаем количество выбранных строк
    $rows = $statement->rowCount();

    //var_dump($rows);

    // если есть хотябы одно значение
    if ($rows > 0) {
        echo json_encode(['taken' => true]);
    } else {
        echo json_encode(['taken' => false]);
    }
}
