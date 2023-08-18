<?php
// страница для просмотра всех пользователей
session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Список пользователей</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mb-5">

                <!-- если пользователь авторизован -->
                <?php if (isset($_SESSION['valid_user'])) : ?>
                    <!-- показывать приветствие и ссылку на лк -->
                    <h2>Привет, <?php echo $_SESSION['valid_user']; ?></h2>
                    <a href="cabinet.php">Перейти в личный кабинет</a>
                    <a href="/">На главную</a>
                    <a href="exit.php" class="bg-danger p-2">Выход</a>
                <?php endif; ?>

                <div class="users mt-5" id="users">
                    <h3>Список пользователей</h3>
                </div>

            </div>
        </div>
    </div>
    <script src="users.js"></script>
</body>

</html>