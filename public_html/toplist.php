<?php 
	require_once '../config.php';
	require_once '../partials/header.php';

 ?>
<body style="background-size:cover;">
	<header>
		<img class="logo" src="img/logo.png">
		<h1>Räknekampen</h1>

	</header>
	<section class="toplist show">
		<div class="container">
			<div class="toplistTable"> Ingen toplista</div>
		</div>
	</section>
	<button class="hidden" id="finished"></button>
	<script src="js/libs/jquery.js"></script>
	<script src="js/libs/hammer.js"></script>
	<script src="js/libs/jquery-hammer.js"></script>
	<script src="js/build/script.js"></script>
	<script src="js/toplist.js"></script>
</body>
</html>