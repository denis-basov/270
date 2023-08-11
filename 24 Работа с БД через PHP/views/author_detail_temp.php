<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $result['first_name'] . ' ' . $result['last_name']; ?></title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="author">
        <h1><?php echo $result['first_name'] . ' ' . $result['last_name']; ?></h1>
        <div class="author-info">
            <img src="<?php echo $result['avatar'] ?>" alt="<?php echo $result['first_name'] . ' ' . $result['last_name']; ?>">
            <p><?php echo $result['biography']; ?></p>
        </div>
        <a href="/">На главную</a>
    </div>


</body>

</html>