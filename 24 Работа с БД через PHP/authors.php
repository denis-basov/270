<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Авторы</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<h1>Авторы</h1>
	<!-- вывод авторов в документ -->
	<div class="authors">
		<?php 
			foreach($result as $key => $author){
				$key++;
				echo "<div class='author author-$key'>
						<img src='$author[avatar]' alt='$author[first_name] $author[last_name]'>
					  	<h2>$author[first_name] $author[last_name]</h2>
						<p>$author[short_info]</p>
				      </div>";
			}
		?>
	</div>
</body>
</html>