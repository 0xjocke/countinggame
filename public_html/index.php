<?php 
	require_once '../config.php';
	require_once '../partials/header.php';

 ?>
<body>
	<header>
		<img class="logo" src="img/logo.png">
		<h1>Räknespelet</h1>
	</header>
	<?php require_once 'login.php'; ?>
	<?php require_once 'play.php'; ?>
	<?php require_once 'finished.php'; ?>
	<?php require_once 'toplist.php'; ?>

	<button class="hidden" id="finished"></button>
	<script src="js/libs/jquery.js"></script>
	<script src="js/build/script.js"></script>
</body>
</html>