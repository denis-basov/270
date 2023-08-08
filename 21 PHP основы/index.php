<?php

$title = 'Основы PHP !!!';

$firstName = 'Петр';
$lastName = 'Иванов';
$age = 66;
$hobby = ['Готовить', 'Гулять', 'Строить'];
$isAdmin = false;
$children = null;

$otput = "<h3>Имя: $firstName</h3>";
$otput = '<h3>Имя: ' . $firstName . '</h3>';

$array = ['имя', 'почта', 'телефон', 'возраст'];

// ассоциативный массив
$user = [
    'firstName' => 'Иван',
    'lastName' => 'Петров',
    'age' => 22
];
/**
 * let user = {
 *  firstName: 'Иван',
 *  lastName: 'Петров',
 *  age: 22
 * }
 */

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>

<body>

    <header>
        <p>Привет, <?php echo $firstName; ?>!</p>
        <ol>
            <?php
            foreach ($array as $value) {
                echo "<li>$value</li>";
            }
            ?>
        </ol>
    </header>
    <h1><?php echo $title; ?></h1>
    <ul>
        <li>Имя: <?php echo $firstName; ?></li>
        <li>Фамилия: <?php echo $lastName; ?></li>
        <li>Возраст: <?php echo $age; ?></li>
        <li>Хобби: <?php echo implode(', ', $hobby); ?></li>
        <!--  implode(', ', $hobby); -->
        <!--  hobby.join(', ')  -->
    </ul>

    <?php echo $otput; ?>

    <footer>
        <ul>
            <?php
            foreach ($user as $key => $value) {
                echo "<li>$key: $value</li>";
            }
            ?>
        </ul>
        <h3><?php echo $title; ?></h3>
        <p>Copyright © 2001-<?php echo date("Y"); ?> The PHP Group</p>
    </footer>
</body>

</html>