<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Новости</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="news">
        <h1>Новости</h1>
        <?php
        foreach ($news as $news_item) {
            echo "<div class='news-item'>
                    <div class='news-img'>
                        <a href='news_detail.php?id=$news_item[news_id]'>
                            <img src='$news_item[image]'>
                        </a>    
                    </div>
                    <div class='text-info'>
                        <a href='news_detail.php?id=$news_item[news_id]'>
                            <h2>$news_item[title]</h2>
                        </a>    
                        <a href='author_detail.php?id=$news_item[author_id]'>$news_item[first_name] $news_item[last_name]</a>
                    </div>
                  </div>";
        }
        ?>
    </div>
</body>

</html>