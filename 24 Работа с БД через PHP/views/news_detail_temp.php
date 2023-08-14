<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $news_item['title']; ?></title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="news-item">
        <div class="news-info">
            <h2><?php echo $news_item['title']; ?></h2>
            <img src="<?php echo $news_item['image']; ?>" alt="<?php echo $news_item['title']; ?>">
            <p><?php echo $news_item['text']; ?></p>
            <p><?php echo $news_item['add_date']; ?></p>
            <a href="news.php">Ко всем новостям</a>
        </div>
        <div class="author-info">
            <h3><?php echo $news_item['first_name'] . ' ' . $news_item['last_name']; ?></h3>
            <img src="<?php echo $news_item['avatar']; ?>" alt="<?php echo $news_item['first_name'] . ' ' . $news_item['last_name']; ?>">
            <p><?php echo $news_item['short_info']; ?></p>
            <a href="author_detail.php?id=<?php echo $news_item['author_id']; ?>">Подробнее...</a>
        </div>
    </div>
</body>

</html>