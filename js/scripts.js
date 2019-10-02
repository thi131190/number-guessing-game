const MIN = 0;
const MAX = 100;
let randomNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let guessTimes = 5;
let tracks = [];
console.log(randomNum);

function guess() {
	let ul = document.getElementById('guessed-nums');
	let guessedNums = '';
	if (guessTimes > 0) {
		let guessingNum = document.getElementById('guessing-num').value;
		document.getElementById('guessing-num').value = '';

		if (tracks.includes(guessingNum)) {
			console.log('You already guessed that number!');
			document.getElementById('status').innerHTML = 'You already guessed that number!';
			document.getElementById('status').style.color = 'red';
			return;
		}

		tracks.push(guessingNum);
		if (guessingNum > randomNum) {
			// console.log('Too HIGH!!!');
			document.getElementById('status').innerHTML = 'Too HIGH!!!';
			document.getElementById('status').style.color = 'orange';
		} else if (guessingNum < randomNum) {
			// console.log('Too LOW!!!');
			document.getElementById('status').innerHTML = 'Too LOW!!!';
			document.getElementById('status').style.color = 'orange';
		} else {
			// console.log('CORRECT!!!!!');
			document.getElementById('status').innerHTML = 'CORRECT!!!!!';
			document.getElementById('status').style.color = 'green';
			document.getElementById('btn-guess').disabled = true;
		}
		for (i = 0; i < tracks.length; i++) {
			guessedNums += `<li>${tracks[i]}</li>`;
		}
		guessTimes--;

		document.getElementById('times').innerHTML = guessTimes;
		document.getElementById('guessed-nums').innerHTML = guessedNums;
	} else {
		// console.log('GAME OVER!!!');
		document.getElementById('status').innerHTML = 'GAME OVER!!!';
		document.getElementById('status').style.color = 'red';
	}
}

function startOver() {
	document.getElementById('guessing-num').value = '';
	guessTimes = 5;
	document.getElementById('times').innerHTML = guessTimes;
	console.log(guessTimes);
	tracks = [];
	document.getElementById('guessed-nums').innerHTML = '';
	document.getElementById('status').innerHTML = '';
}
