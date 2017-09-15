window.addEventListener('keydown', function(e){
	const button = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
	if (!button) return;
	button.classList.add('focus');
	if (isNaN(e.key) === false){
		maxNumbers();
		if (full === true){
			setTimeout(function(){
				button.classList.remove('focus');
			},500);
			return;
		}
		removeZero();
		newExpression();
		tempArray.push(e.key);
		console.log(e.key);
		display.value = tempArray.join('');
	}else if (e.keyCode === '.'){
		decimalActions();
	} else if(e.keyCode === 13){
		equalsFunction();
	} else if(e.keyCode === 65){
		clearFunction();
	} else if(e.keyCode === 67){
		clearLastFunction();
	} else if(e.keyCode === 189){
		subtractionFunction();
	} else if(e.keyCode === 187){
		additionFunction();
	}else if(e.keyCode === 88){
		multiplicationFunction();
	}else if(e.keyCode === 191){
		divisionFunction();
	}
	console.log(e.key);
	setTimeout(function(){
		button.classList.remove('focus');
	},500);
});
