//var nbaTeams = ["lakers", "cavaliers", "warriors", "spurs"];
var count = 6;
var wins = 0;
var losses = 0;
var gamesDiv = document.getElementById("games");
var statusDiv = document.getElementById("statusDiv");
var gameChosen;
var guesses;








function startGame(){
    var nbaTeams = ["lakers", "cavaliers", "warriors", "spurs"];
	var randomTeam = Math.floor(Math.random() * nbateams.length);
	gameChosen = nbaTeams[randomTeam];
	if(gameChosen === "lakers"){
		console.log("lakers game");
		for(var i = 0; i < 6; i++){
			var letters = ['1','2','3','4','5','6',];
			var spaces = document.createElement("letterSpace"); //create letters?
			spaces.innerHTML = "__ ";
			gamesDiv.appendChild(spaces);
			spaces.setAttribute("id", letters[i]); 
		}
	}
	if(gameChosen === "cavaliers")
		console.log("cavaliers game");
		for(var i = 0 ; i < 9; i++){
			var letters = ['1', '2', '3', '4', '5', '6', '7', '8'];
			var spaces = document.createElement("letterSpace");
			spaces.innerHTML = "__ ";
			gamesDiv.appendChild(spaces);
			spaces.setAttribute("id", letters[i]);

		}
	}
	if(gameChosen === "warriors") {
		console.log("warriors game");
			for(var i =0; i < 8 ; i++){
				var letters = ['1', '2', '3', '4', '5', '6', '7', '8'];
				var spaces = document.createElement("letterSpace");
				spaces.innerHTML = "__ ";
				gamesDiv.appendChild(spaces);
				spaces.setAttribute("id", letters[i]);
			}
	}
	if(gameChosen === "spurs"){
		console.log ("spurs game");
			for(var i =0; i < 5; i++){
				var letters = ['1', '2', '3', '4','5'];
				var spaces = document.createElement("letterSpace");
				spaces.innerHTML = "__ ";
				gamesDiv.appendChild(spaces);
				spaces.setAttribute("id", letters[i]);
			}
	}
	document.getElementById("status").innerHTML = "Guesses Left: 6";
}

document.onkeypress = function(event){
	guesses = event.key.toLowerCase();

	if(gameChosen === "lakers") {
		console.log("lakers game");

		var wrongLetter = ["b", "c", "d", "b", "f", "g", "h", "i", "j", "m", "m", "o", "p", "q", "t", "u", "v", "w", "x", "y", "z"];
		if(guesses === "l"){
			document.getElementById("1").innerHTML = "l";
		}
		if(guesses === "2"){
			document.getElementById("2").innerHTML = "a";
		}
		if(guesses === "3"){
			document.getElementById("3").innerHTML = "k";
		}
		if(guesses === "4"){
			document.getElementById("4").innerHTML = "e";
		}
		if(guesses === "5"){
			document.getElementById("5").innerHTML = "r";
		}
		if(guesses === "6"){
			document.getElementById("6").innerHTML = "s";
		}

		if((document.getElementById('1').innerHTML === "l") &&
			(document.getElementById('2').innerHTML === "a") &&
			(document.getElementById('3').innerHTML === "k") &&
			(document.getElementById('4').innerHTML === "e") &&
			(document.getElementById('5').innerHTML === "r") &&
			(document.getElementById('6').innerHTML === "s")) {
			document.getElementById("status").innerHTML = "CHAMPION!";
			console.log("winner winner, chicken dinner");
			wins++;
			if(wins === 1) {
				var winnerDiv = document.createElement('button');
				winnerDiv.innerHTML = "Reset Game";
				statusDiv.appendChild(winnerDiv);
				winDiv.setAttribute("id", "win-button");

			}
		}

		for( i = 0; i< incorrect.length; i ++){
			if(guesses === incorrect[i]){
				count--;
				console.log(count);
				document.getElementById("status").innerHTML = "Mistakes Left: " +count;
				var para = document.createElement("letterSpace");
				var node = document.createTextNode(guesses+ " ");
				para.appendChild(node);
				var element = document.getElementById("wrongGuess");
				element.appendChild(para);
			}
			else if(count == 0){
				document.getElementById("status").innerHTML = "ANOTHER ONE BITES THE DUST!"
				losses++;
				if(losses === 1) {
					var winnerDiv = document.createElement('button');
					winnerDiv.innerHTML = "Reset Game Here";
					statusDiv.appendChild(winnerDiv);
					winnerDiv.setAttribute("id", "lose-button");
				}
			}
		}
	}

	if(gameChosen === "cavaliers") {
		console.log("cavaliers game");
		var wrongLetter = ["b", "d", "f", "g", "h","j", "k","m", "n", "o", "q", "t", "u", "w", "x", "y", "z"];
		if(guesses === "l"){
			document.getElementById("1").innerHTML = "c";
		}
		if(guesses === "2"){
			document.getElementById("2").innerHTML = "a";
		}
		if(guesses === "3"){
			document.getElementById("3").innerHTML = "v";
		}
		if(guesses === "4"){
			document.getElementById("4").innerHTML = "a";
		}
		if(guesses === "5"){
			document.getElementById("5").innerHTML = "l";
		}
		if(guesses === "6"){
			document.getElementById("6").innerHTML = "i";
		}
		if(guesses === "7"){
			document.getElementById("7").innerHTML = "e";
		}
		if(guesses === "8"){
			document.getElementById("8").innerHTML = "r";
		}
		if(guesses === "9"){
			document.getElementById("9").innerHTML = "s";
		}
		if((document.getElementById('1').innerHTML === "l") &&
			(document.getElementById('2').innerHTML === "2") &&
			(document.getElementById('3').innerHTML === "3") &&
			(document.getElementById('4').innerHTML === "4") &&
			(document.getElementById('5').innerHTML === "5") &&
			(document.getElementById('6').innerHTML === "6") &&
			(document.getElementById('7').innerHTML === "7") &&
			(document.getElementById('8').innerHTML === "8") &&
			(document.getElementById('9').innerHTML === "9")) {
			document.getElementById("status").innerHTML = "CHAMPION!";
			console.log("winner winner, chicken dinner");
			wins++;
			if(wins === 1) {
				var winnerDiv = document.createElement('button');
				winnerDiv.innerHTML = "Reset Game";
				statusDiv.appendChild(winnerDiv);
				winDiv.setAttribute("id", "win-button");

			}
		}

		for( i = 0; i< incorrect.length; i ++){
			if(guesses === incorrect[i]){
				count--;
				console.log(count);
				document.getElementById("status").innerHTML = "Mistakes Left: " +count;
				var para = document.createElement("letterSpace");
				var node = document.createTextNode(guesses+ " ");
				para.appendChild(node);
				var element = document.getElementById("wrongGuess");
				element.appendChild(para);
			}
			else if(count == 0){
				document.getElementById("status").innerHTML = "ANOTHER ONE BITES THE DUST!"
				losses++;
				if(losses === 1) {
					var winnerDiv = document.createElement('button');
					winnerDiv.innerHTML = "Reset Game Here";
					statusDiv.appendChild(winnerDiv);
					winnerDiv.setAttribute("id", "lose-button");
				}
			}
		}
	}

	if(gameChosen === "warriors") {
		console.log("warriors game");
		var wrongLetter = ["b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "t", "u", "x", "y", "z"];
		if(guesses === "l"){
			document.getElementById("1").innerHTML = "w";
		}
		if(guesses === "2"){
			document.getElementById("2").innerHTML = "a";
		}
		if(guesses === "3"){
			document.getElementById("3").innerHTML = "r";
		}
		if(guesses === "4"){
			document.getElementById("4").innerHTML = "r";
		}
		if(guesses === "5"){
			document.getElementById("5").innerHTML = "i";
		}
		if(guesses === "6"){
			document.getElementById("6").innerHTML = "o";
		}
		if(guesses === "7"){
			document.getElementById("7").innerHTML = "r";
		}
		if(guesses === "8"){
			document.getElementById("8").innerHTML = "s";
		}
		if((document.getElementById('1').innerHTML === "l") &&
			(document.getElementById('2').innerHTML === "2") &&
			(document.getElementById('3').innerHTML === "3") &&
			(document.getElementById('4').innerHTML === "4") &&
			(document.getElementById('5').innerHTML === "5") &&
			(document.getElementById('6').innerHTML === "6") &&
			(document.getElementById('7').innerHTML === "7") &&
			(document.getElementById('8').innerHTML === "8")) {
			document.getElementById("status").innerHTML = "CHAMPION!";
			console.log("winner winner, chicken dinner");
			wins++;
			if(wins === 1) {
				var winnerDiv = document.createElement('button');
				winnerDiv.innerHTML = "Reset Game";
				statusDiv.appendChild(winnerDiv);
				winDiv.setAttribute("id", "win-button");

			}
		}

		for( i = 0; i< incorrect.length; i ++){
			if(guesses === incorrect[i]){
				count--;
				console.log(count);
				document.getElementById("status").innerHTML = "Mistakes Left: " +count;
				var para = document.createElement("letterSpace");
				var node = document.createTextNode(guesses+ " ");
				para.appendChild(node);
				var element = document.getElementById("wrongGuess");
				element.appendChild(para);
			}
			else if(count == 0){
				document.getElementById("status").innerHTML = "ANOTHER ONE BITES THE DUST!"
				losses++;
				if(losses === 1) {
					var winnerDiv = document.createElement('button');
					winnerDiv.innerHTML = "Reset Game Here";
					statusDiv.appendChild(winnerDiv);
					winnerDiv.setAttribute("id", "lose-button");
				}
			}
		}
	}


	if(gameChosen === "spurs") {
		console.log("spurs game");
		var wrongLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "t", "u", "w", "x", "y", "z"];
		if(guesses === "l"){
			document.getElementById("1").innerHTML = "s";
		}
		if(guesses === "2"){
			document.getElementById("2").innerHTML = "p";
		}
		if(guesses === "3"){
			document.getElementById("3").innerHTML = "u";
		}
		if(guesses === "4"){
			document.getElementById("4").innerHTML = "r";
		}
		if(guesses === "5"){
			document.getElementById("5").innerHTML = "s";
		}
		if((document.getElementById('1').innerHTML === "l") &&
			(document.getElementById('2').innerHTML === "2") &&
			(document.getElementById('3').innerHTML === "3") &&
			(document.getElementById('4').innerHTML === "4") &&
			(document.getElementById('5').innerHTML === "5")) {
			document.getElementById("status").innerHTML = "CHAMPION!";
			console.log("winner winner, chicken dinner");
			wins++;
			if(wins === 1) {
				var winnerDiv = document.createElement('button');
				winnerDiv.innerHTML = "Reset Game";
				statusDiv.appendChild(winnerDiv);
				winDiv.setAttribute("id", "win-button");

			}
		}

		for( i = 0; i< incorrect.length; i ++){
			if(guesses === incorrect[i]){
				count--;
				console.log(count);
				document.getElementById("status").innerHTML = "Mistakes Left: " +count;
				var para = document.createElement("letterSpace");
				var node = document.createTextNode(guesses+ " ");
				para.appendChild(node);
				var element = document.getElementById("wrongGuess");
				element.appendChild(para);
			}
			else if(count == 0){
				document.getElementById("status").innerHTML = "ANOTHER ONE BITES THE DUST!"
				losses++;
				if(losses === 1) {
					var winnerDiv = document.createElement('button');
					winnerDiv.innerHTML = "Reset Game Here";
					statusDiv.appendChild(winnerDiv);
					winnerDiv.setAttribute("id", "lose-button");
				}
			}
		}
	}
}














