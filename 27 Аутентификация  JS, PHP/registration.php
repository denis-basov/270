<?php

// начинаем сессию - выдаем клиенту уникальный номер
session_start();

require 'server/db_connect.php';

// забираем введенные текстовые данные из массива $_POST
$login = trim($_POST['login']);
$email = trim($_POST['email']);
$password = trim($_POST['password']);

// шифруем пароль
$hash = password_hash($password, PASSWORD_DEFAULT);

// забираем картинку из массива $_FILES
$avatar = $_FILES['avatar'];

// формируем путь, куда переместим картинку
// если размер картинки === 0, значит картинку не приложили
if ($avatar['size'] === 0) {
    // задаем переменной путь к дефолтной картинке
    $avatarPath = 'images/default-user.jpg';
} else {
    // иначе, формируем путь для картинки
    $avatarPath = 'images/' . $avatar['name']; // 'images/image.jpg'

    // перемещаем картинку из временного хранилища в нужную папку
    move_uploaded_file($avatar['tmp_name'], $avatarPath);
}

// добавляем нового юзера в БД
$query = "INSERT INTO users(login, email, password, avatar)
          VALUES('$login', '$email', '$hash', '$avatarPath');";
$pdo->query($query);

// получаем идентификатор добавленного в БД пользователя
$id = $pdo->lastInsertId();

// записываем в сессию ID и логин пользователя
$_SESSION['id'] = $id;
$_SESSION['valid_user'] = $login;

// перенаправляем клиента на страницу личного кабинета
header('Location: cabinet.php');
