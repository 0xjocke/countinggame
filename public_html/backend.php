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
	if (isset($_GET['toplist'])) {
		$table ='<table class="toplistTable">';
		$persons = Person::get_toplist(10);
		$counter= 1;
		foreach($persons as $person){
			if (isset($_SESSION['id'])) {
				if ($person->id === $_SESSION['id']) {
				$table .= '<tr class="thisperson"><td>'. $counter. '.</td>'. '<td>' . $person->name . '</td>' . 
							'<td>' . $person->highscore . '</td>';
							$counter++;	
				}else{
				$table .= '<tr><td>'. $counter. '.</td>'. '<td>' . $person->name . '</td>' . 
				'<td>' . $person->highscore . '</td>';
				$counter++;
				}	
			}else{
				$table .= '<tr><td>'. $counter. '.</td>'. '<td>' . $person->name . '</td>' . 
				'<td>' . $person->highscore . '</td>';
				$counter++;
			}
		}
		$table .='</table>';
		echo $table;
	}

	if (isset($_GET['tvtoplist'])) {
		$persons = Person::get_toplist(20);
		$json = json_encode($persons);
		echo $json; 
	}
	if (isset($_GET['tvmax'])) {
		$max = Person::get_highest();
		$json = json_encode($max);
		echo $json; 
	}
	if (isset($_GET['secret'])) {
		if($_GET['secret'] === 'hejabamse'){
			$archive = Person::archive();
   	 		header('Location: archive.php');
		}
	

	}




 ?>