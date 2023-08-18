<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>

  <!-- если пользователь авторизован -->
  <?php if (isset($_SESSION['valid_user'])) : ?>
    <!-- показывать приветствие и ссылку на лк -->
    <div class="container">
      <div class="row">
        <div class="col-md-8 mb-5">
          <h2>Привет, <?php echo $_SESSION['valid_user']; ?></h2>
          <a href="cabinet.php">Перейти в личный кабинет</a>
          <a href="exit.php" class="bg-danger p-2">Выход</a>
        </div>
      </div>
    </div>
  <?php else : ?>
    <!-- если не авторизован, показываем форму регистрации -->
    <div class="container">
      <div class="row">
        <div class="col-md-8 mb-5">
          <h2>Регистрация</h2>
          <form id="reg-form" action="registration.php" method="POST" enctype="multipart/form-data" class="p-5 bg-white">
            <!-- login -->
            <div class="row form-group mb-4">
              <div class="col-md-12 abs-container">
                <label class="text-black">Логин</label>
                <input type="text" id="login" name="login" class="form-control" placeholder="Не менее пяти символов" />
                <span class="error abs-element" id="login-error"></span>
              </div>
            </div>

            <!-- email -->
            <div class="row form-group mb-4">
              <div class="col-md-12 abs-container">
                <label class="text-black">Адрес электронной почты</label>
                <input type="email" id="email" name="email" class="form-control" placeholder="example@example.ru" />
                <span class="error abs-element" id="email-error"></span>
              </div>
            </div>

            <!-- password -->
            <div class="row form-group mb-4">
              <div class="col-md-12 abs-container">
                <label class="text-black">Пароль</label>
                <input type="password" id="password" name="password" class="form-control" placeholder="Не менее шести произвольных символов" />
                <span class="error abs-element" id="password-error"></span>
                <span class="abs-element-2" id="type-btn">Показать пароль</span>
              </div>
            </div>

            <!-- avatar -->
            <div class="row form-group mb-4">
              <div class="col-md-12">
                <label class="text-black">Аватар</label><br />
                <input type="file" name="avatar" />
              </div>
            </div>

            <!-- button -->
            <div class="row form-group mt-5">
              <div class="col-md-12">
                <input type="submit" id="submit-btn" value="Зарегистрироваться" class="btn btn-primary py-2 px-4 text-white" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  <?php endif; ?>

</body>

</html>