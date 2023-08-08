<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2>Вход</h2>
    <form action="enter.php" method="POST">
        <div>
            <label>Логин:</label>
            <input type="text" name="login">
        </div>
        <div>
            <label>Адрес электронной почты:</label>
            <input type="email" name="email">
        </div>
        <div>
            <label>Пароль:</label>
            <input type="password" name="password">
        </div>

        <input type="submit" name="button" value="Войти">
    </form>
</body>

</html>