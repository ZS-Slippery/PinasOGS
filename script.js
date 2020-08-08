// =====================
// Create required vars
// =====================
var output = $('.output');
var input = $('textarea.input');
var toOutput;
var audio = new Audio('Rotisary Chicken.mp3');
// Creates the event listner for the comands ==
// Yes this is a long one - could do with some
// improvements ===============================
input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		//console.log(inputVal);

		if (inputVal == "help") {
			help();
			input.val('');
		} else if (inputVal == "ping") {
			pong();
			input.val('');
		} else if (inputVal == "about") {
			aboutMe();
			input.val('');
		} else if (inputVal == "Free") {
			FreeItems();
			input.val('');
		}
		else if (inputVal == "contact") {
			contactMe();
			input.val('');
		}else if (inputVal == "Slippery") {
			PlayMemes();
			input.val('');
		} else if (inputVal.startsWith("say") === true) {
			sayThis(inputVal);
			input.val('');
		} else if (inputVal.startsWith("Vbucks") === true) {
			Vbucks(inputVal);
			input.val('');
		}
		else if (inputVal.startsWith("vbucks") === true) {
			vbucks(inputVal);
			input.val('');
		}
		else if (inputVal == "time") {
			getTime();
			input.val('');
		} else if (inputVal == 'whats that sound' || inputVal == 'what\'s that sound' || inputVal == 'whats that sound?') {
			seperator();
			Output('<span class="blue">' + inputVal + '</span></br><span class="red">Machine Broken!</span></br>');
			seperator();
			input.val('');
		} else if (inputVal.startsWith("exit") === true) {
			Output('<span class="blue">Goodbye! I hope you enjoy our Products.</span>');
			setTimeout(function() {
				window.open('https://discord.gg/JcUHAUw');
			}, 1000);
		} else {
			Output('<span>command not found</span></br>');
			input.val('');
		}
	}
});

// functions related to the commands typed
// =======================================

// prints out a seperator
function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

//Plays Meme Song of My choice
function PlayMemes() {
	audio.play();
	output.html("");
	Output("Enjoy This Masterpiece");
}

// prints out a list of "all" comands available
function help() {
	var commandsArray = ['Help: List of available commands', '>help', '>about', '>contact', '>ping', '>Vbucks', '>clear', '>say'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span>' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
}

// prints the result for the pong command
function pong() {
	Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}

// function to the say command
function sayThis(data) {
	data = data.substr(data.indexOf(' ') + 1);
	Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
}

// VBucks?!? not really
function Vbucks(data) {
	data = data.substr(data.indexOf(' ') + 1);
		window.open('https://checkout.square.site/buy/CKRD4VMNRQXY5SOMNE444TDO');
	}
	Output('<span>' + data + '</span></br>');

	// VBucks?!? not really
function vbucks(data) {
	data = data.substr(data.indexOf(' ') + 1);
		window.open('https://checkout.square.site/buy/CKRD4VMNRQXY5SOMNE444TDO');
	}
	Output('<span>' + data + '</span></br>');

	function FreeItems (data) {
		data = data.substr(data.indexOf(' ') + 1);
			window.open('https://pastebin.com/arLxDVsy');
		}
		Output('<span>' + data + '</span></br>');


// function to get current time...not
function getTime() {
	Output('<span>Use this command to get access to the Vbucks Payment link</span></br>');
}

function aboutMe() {
	var aboutMeArray = ['>About:', 'Hi There!', 'My name is Slippery, I built this website for all your V-Bucks Needs'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function contactMe() {
	var contactArray = ['>Contact:', 'https://discord.gg/JcUHAUw'];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

// Prints out the result of the command into the output div
function Output(data) {
	$(data).appendTo(output);
}