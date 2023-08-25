<?php
// добавление пользователя в список друзей

// страница для просмотра всех пользователей
session_start();

// подключение БД
require 'db_connect.php';

$userId = $_SESSION['id']; // получаем ID текущего пользователя
$friendId = (int)$_GET['friendId']; // забираем из массива $_GET ID нового друга

/**
 * получаем по ID текущего юзера массив с его друзьями
 */
$query = "SELECT friends
            FROM users
            WHERE id = $userId;";
$statement = $pdo->query($query);
$friendsJSON = $statement->fetch()['friends'];

$friends = json_decode($friendsJSON); // раскодируем строку JSON в массив

// добавляем в массив, полученный из бд нового друга
array_push($friends, $friendId);

/**
 * формируем из массива с друзьями строку JSON
 * и обновляем список друзей в БД
 */
$friendsJSON = json_encode($friends);

// обновляем поле с друзьями текущего юзера
$query = "UPDATE users
          SET friends = '$friendsJSON'
          WHERE id = $userId;";
$statement = $pdo->query($query);

echo $friendsJSON;
