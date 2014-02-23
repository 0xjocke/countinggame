<?php 
	require_once '../config.php';

	if (count($_POST) >= 1) {
		$person = new Person($_POST);
		//$person->save_to_db();
		Authorization::authenticate($person->name, $person->email);
		Authorization::check_or_redirect();
	}
 ?>
 <section class="play">
	<div class="container">
		<div class="col3 playmode">
			<p>Tid kvar:</p>
			<p id="counter" class="large"></p>
		</div>
		<div class="col6 playmode">
			<p class="megalarge">23+25</p>
		</div>
		<div class="col3o playmode">
			<p>Antal rätt:</p>
			<p class="large">10</p>
		</div>
	</div>
	<div class="container">
		<button class="answer">45</button>
		<button class="answer">24</button>
		<button class="answer">33</button>
		<button class="answer">10</button>
	</div>
</section>