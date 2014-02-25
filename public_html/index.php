<?php 
	require_once '../config.php';
	require_once '../partials/header.php';

 ?>
<body>
	<header>
		<img class="logo" src="img/logo.png">
		<h1>Räknekampen</h1>
	</header>
	<?php require_once '../partials/login.php'; ?>
	<?php require_once '../partials/play.php'; ?>
	<?php require_once '../partials/finished.php'; ?>
	<?php require_once '../partials/toplist.php'; ?>

	<button class="hidden" id="finished"></button>
	<script src="js/libs/jquery.js"></script>
	<script src="js/libs/hammer.js"></script>
	<script src="js/libs/jquery-hammer.js"></script>
	<script src="js/build/script.js"></script>
</body>
</html>