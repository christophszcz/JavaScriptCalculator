window.addEventListener('keydown', function(e){
	const button = document.querySelector(`.btn[data-key="${e.keyCode}"`);
	if (!button) return;
	button.classList.add('focus');
	console.log(button);
	// if () { 
	// 	tempArray.push(e.key);
	// 	display.value = tempArray.join('');
	//  }
});

function removeTransition(e){
	if (e.propertyName !== 'focus') return;
	this.classList.remove('focus');
}

const buttons = document.querySelectorAll('.btn'); 
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
