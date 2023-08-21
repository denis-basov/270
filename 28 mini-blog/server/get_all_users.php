<?php

require 'db_connect.php';

$query = "SELECT * FROM users ORDER BY id DESC";
$statement = $pdo->query($query, PDO::FETCH_ASSOC);
$users = $statement->fetchAll();
// print_r($users);


echo json_encode($users);


// echo json_encode($pdo->query("SELECT * FROM users", PDO::FETCH_ASSOC)->fetchAll());
