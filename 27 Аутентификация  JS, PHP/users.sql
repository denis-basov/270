-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Авг 21 2023 г., 15:03
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `270_news-authors`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `email`, `password`, `avatar`) VALUES
(8, 'petr222', 'petr222@tesdt', '$2y$10$XeSR3WmwDKBW73VW.8Lca.iFcT0oV1Wg1iPvm4OGjDcuxK94aqONW', 'images/default-user.jpg'),
(10, 'petr1111', 'petr1111@wee', '$2y$10$TkwDinUAHttiHUN0VKWqhevMdcZVdal4waOlgCpTwG7etHwfdoWIO', 'images/jonas-kakaroto-mjRwhvqEC0U-unsplash (1).jpg'),
(13, 'user123', 'user123@rrr', '$2y$10$/ELEl6actplzQXDztr7n3uBJVMAS/VKI4BfiF8d7d.sUXPowY0a5S', 'images/default-user.jpg'),
(14, 'user777', 'user777@resfgf', '$2y$10$FNsOqa6iOepBUQVlpe2fKe/JNnAQ2rrPI78ehWdQgbAIDvy2Dwu22', 'images/christopher-campbell-rDEOVtE7vOs-unsplash (1).jpg'),
(15, 'user555', 'user555@reere', '$2y$10$90p3jo7CCB95cbaqtrVJKOO1Y30z5P3x1HRO7hf4mFpviqFMYMlKO', 'images/ethan-hoover-0YHIlxeCuhg-unsplash.jpg'),
(16, 'usesr3434', 'usesr3434@ttt', '$2y$10$ecIkIdEBY8gfoF3su.IsfuZrffeM1E5hYOSdo8EeOLvOal/3uyfOq', 'images/mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg'),
(17, 'user5664', 'user5664@rert', '$2y$10$e49hD6Z0FirOmcSkjePA8Ok3xpnNjCPfFCh0s9FyydKXNDTO2ZUI2', 'images/michael-austin-jgSAuqMmJUE-unsplash.jpg'),
(18, 'user333', 'user333@wwew', '$2y$10$aV3YlLipZyeuhtauXWnS2OBSRapqszlkvVG20HcfcMj5Uh6aFlHq.', 'images/michael-sum-LEpfefQf4rU-unsplash.jpg'),
(19, 'user987', 'user987@rterr', '$2y$10$QpgPPrcE2xPCSCeGAHIYGeLT9ceBVI5oCes.jGcBRO6YRwdiT4c0.', 'images/default-user.jpg'),
(20, 'user3387', 'user3387@ere', '$2y$10$JZASiHIjgqHESrS6mp5yluNiUBZdn5QM2qsG3XjqRbhZhotwb6ELW', 'images/default-user.jpg'),
(21, 'cat3423', 'cat3423@weer', '$2y$10$cEj0WjkhCqjrVW17DpT3UuBNAbdOrz5dRZjpHF/BfTSAT9tztZPzG', 'images/pacto-visual-cWOzOnSoh6Q-unsplash.jpg'),
(22, 'user3232', 'user3232@wewew', '$2y$10$N5rHW.Ki0OTnnrnrI7rgaeTHeSupgy/qZhPbSwLcbDIwiSWGVX.Ae', 'images/noemi-macavei-katocz-or6mrFMVmHM-unsplash.jpg'),
(23, 'user2234', 'user2234@egdfg', '$2y$10$l3fA5uLYCLw0UhM42N6dW.QbXYArirmK8H9jjUOh6pUoaL1pvuVKa', 'images/harps-joseph-tAvpDE7fXgY-unsplash.jpg'),
(25, 'user999', 'user999@test', '$2y$10$VPhoxQTJCue3nuFTkFv8c.UgnXfFlZN0y1oj35OUEe0AXkfvupbue', 'images/jakob-owens-DQPP9rVLYGQ-unsplash.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
