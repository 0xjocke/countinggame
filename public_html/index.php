<?php 
	require_once '../config.php';
	require_once '../partials/header.php';

 ?>
<body>
	<header>
		<img class="logo" src="img/logo.png">
		<h1>Räknespelet</h1>
	</header>
	<section class="login">
		<div class="container">
			<form id="signup" action="">
				<input class="contactfield contactfield-name" type="text" name="name" placeholder="Namn" required>
				<input class="contactfield contactfield-email" type="email" name="email" placeholder="Email" required>
				<input class=" btn btn-default" type="submit" value="Spela">
			</form>
		</div>
	</section>
</body>
</html>