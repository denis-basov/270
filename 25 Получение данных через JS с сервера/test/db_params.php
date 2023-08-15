<?php

$db_params = [
    'host' => 'localhost',
    'data' => '270_news-authors',
    'user' => 'root',
    'password' => ''
];

return new PDO("mysql:dbname=$db_params[data];host=$db_params[host]", $db_params['user'], $db_params['password']);
