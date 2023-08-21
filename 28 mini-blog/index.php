<?php
session_start();

require 'components/header.php';
?>

<!-- если не авторизован, показываем форму регистрации и входа -->
<?php if (!isset($_SESSION['valid_user'])) : ?>
  <div class="container">
    <div class="row">

      <!-- форма регистрации -->
      <div class="col-md-6 mb-5">
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
              <span class="abs-element-2 type-btn">Показать пароль</span>
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

      <!-- форма входа -->
      <div class="col-md-6 mb-5">
        <h2>Вход</h2>
        <form id="enter-form" action="enter.php" method="POST" class="p-5 bg-white">
          <!-- login -->
          <div class="row form-group mb-4">
            <div class="col-md-12 abs-container">
              <label class="text-black">Логин</label>
              <input type="text" id="enter-login" name="login" class="form-control" placeholder="Не менее пяти символов" />
              <span class="error abs-element" id="enter-login-error"></span>
            </div>
          </div>

          <!-- password -->
          <div class="row form-group mb-4">
            <div class="col-md-12 abs-container">
              <label class="text-black">Пароль</label>
              <input type="password" id="enter-password" name="password" class="form-control" placeholder="Не менее шести произвольных символов" />
              <span class="error abs-element" id="enter-password-error"></span>
              <span class="abs-element-2 type-btn">Показать пароль</span>
            </div>
          </div>

          <!-- button -->
          <div class="row form-group mt-5">
            <div class="col-md-12">
              <input type="submit" id="enter-submit-btn" value="Войти" class="btn btn-primary py-2 px-4 text-white" />
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
  <script src="script.js"></script>
<?php endif; ?>

<div class="site-section">
  <div class="container">
    <div class="row mb-5">
      <div class="col-12">
        <h2>Recent Posts</h2>
      </div>
    </div>

    <div class="row" id="main-news-container">
    </div>
    <script src="news.js"></script>

  </div>
</div>

<?php
// подключаем подвал сайта
require 'components/footer.php';
?>