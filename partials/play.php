<section class="play">
	<div class="container relative">
		<div class="col3 playmode">
			<p>Tid kvar:</p>
			<p id="counter" class="large">60</p>
		</div>
		<div class="col6 playmode">
			<p id="mathQuestion" class="megalarge"></p>
		</div>
		<div class="col3o playmode">
			<p>Antal poäng:</p>
			<p id="points" class="large"></p>
		</div>
		<img class="bonus" src="img/bonus.png" alt="Fortknox">
	</div>
	<div class="container">
		<button id="answer1" class="answer"></button>
		<button id="answer2" class="answer"></button>
		<button id="answer3" class="answer"></button>
		<button id="answer4" class="answer"></button>
	</div>
	<audio id="bonusPling" src="audio/pling.wav">
		<source src="audio/pling.wav" type="audio/wav" />
		<source src="audio/pling.mp3" type="audio/mpeg" />
	</audio>
	<audio id="clockSound" src="audio/clock.wav">
		<source src="audio/clock.wav" type="audio/wav" />
		<source src="audio/clock.mp3" type="audio/mpeg" />
	</audio>
	<button id="dataloaded" class="hidden"></button>
</section>