<?php
// CRUD


// CREATE 
// 1. CREATE -  создаёт объект базы данных (базу, таблицу)
// 2. INSERT - добавляет новые данные в существующую таблицу

// READ
// 1. SELECT - выбирает данные, удовлетворяющие заданным условиям
// SELECT login, email FROM users

// UPDATE
// 1. ALTER изменяет объект (базу, таблицу)
// 2. UPDATE изменяет существующие данные в таблице

// DELETE
// 1. DELETE удаляет данные из таблицы;
// 2. DROP - удаление БД, таблицы

// типы данных SQL
// 1. INT - целое число
// 2. VARCHAR - строка переменной длины (до 255 символов)
// 3. TEXT - текстовый тип данных для хранения большого текста
// 4. DATE, DATETIME, TIMESTAMP - временные типы

/*
CREATE TABLE news(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    add_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
*/