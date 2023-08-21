<?php
session_start();
// выход из лк

// удаляем все элементы из массива $_SESSION
session_unset();
// перенаправляем на главную
header('Location: /');
