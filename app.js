document.addEventListener('keydown', keyHandler, false);
function keyHandler (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (konomipattern.indexOf(event.key) < 0 || event.key !== konomipattern[current]) {
		current = 0;
		return;
	}
	// Update how much of the pattern is complete
	current++;
	// If complete, alert and reset
	if (konomipattern.length === current) {
		current = 0;
        document.querySelector('body').classList.add('konomi');
	}
};

let konomipattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let howDoYouTurnThisOn = "how do you turn this on";

let current = 0;

