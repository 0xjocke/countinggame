<?php 
	require_once '../config.php';

	if (isset($_POST['email'])) {
			$person = new Person($_POST);
			$person->save_to_db();
			$person->save_to_session();
	}

	 if (isset($_POST['points'])) {
		$playing_person = Person::find($_SESSION['id']);
		if ($playing_person->highscore < $_POST['points']) {
			$playing_person::save_highscore($_SESSION['id'], $_POST['points']);
		}
	}

 ?>