window.addEventListener('keydown', function(e){
	const button = document.querySelector(`.btn[data-key="${e.keyCode}"`);
	if (!button) return;
	button.classList.toggle('focus');
	if (isNaN(e.key) === false){
		tempArray.push(Number(e.key));
		display.value = tempArray.join('');
	}else{
		decimalActions();
	} 
});

function removeTransition(e){
	if (e.propertyName !== 'focus') return;
	this.classList.remove('focus');
}

const buttons = document.querySelectorAll('.btn'); 
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
