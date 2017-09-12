window.addEventListener('keydown', function(e){
	const button = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
	if (!button) return;
	button.classList.add('focus');
	if (isNaN(e.key) === false){
		maxNumbers();
		if (full === true){
			return;
		}
		removeZero();
		newExpression();
		tempArray.push(e.key);
		console.log(e.key);
		display.value = tempArray.join('');
	}else{
		decimalActions();
	}
	setTimeout(function(){
		button.classList.remove('focus');
	},500);
});
