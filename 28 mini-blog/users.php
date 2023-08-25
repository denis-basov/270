<?php
// страница для просмотра всех пользователей
session_start();

require 'components/header.php';
?>

<div class="container">
    <div class="row">
        <div class="col-md-12 mb-5">

            <div class="users mt-5" id="users">
                <h3>Список пользователей</h3>
            </div>

        </div>
    </div>
</div>
<script src="js/users.js"></script>

<?php
// подключаем подвал сайта
require 'components/footer.php';
?>