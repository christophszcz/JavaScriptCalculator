window.addEventListener('keydown', function(e){
	const button = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
	if (!button) return;
	button.classList.add('focus');
	if (isNaN(e.key) === false){
		tempArray.push(Number(e.key));
		display.value = tempArray.join('');
	}else{
		decimalActions();
	}
	setTimeout(function(){
		button.classList.remove('focus');
	},500);
});
