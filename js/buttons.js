var tempArray = [], array = []; 
var display = document.getElementById('display');
display.value = "0";
var full = false;
var equalsFunctionCalled = false;

function maxNumbers(){
	if(tempArray.length > 7){
		full = true;
	}
}

/* New Operation */

function newExpression(){
	if (equalsFunctionCalled && array.length >= 1 && additionFunction.called === false && subtractionFunction.called === false && multiplicationFunction.called === false && divisionFunction.called === false){
		tempArray = [];
		array = [];
	}
	equalsFunctionCalled = false;
}

/* Remove Zero */

function removeZero(){
	if (tempArray[0] === 0 && tempArray[1] !== '.'){
		tempArray.splice(0,1);
	}
}

/* Numbers, Decimal & Negative Symbol */

var zero  = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var decimal = document.getElementById('decimal');
var subtraction = document.getElementById('subtraction');

subtraction.addEventListener('click', function(){
	if (tempArray.length < 1 && array.length < 1){
		maxNumbers();
		if (full === true){
			return;
		}
		removeZero();
		newExpression();
		tempArray.push('-');
		display.value = tempArray.join('');
		display.style.direction = 'ltr';
		display.style.textAlign = 'right';	
	}
});

zero.addEventListener('click', numberActions);
one.addEventListener('click', numberActions);
two.addEventListener('click', numberActions);
three.addEventListener('click', numberActions);
four.addEventListener('click', numberActions);
five.addEventListener('click', numberActions);
six.addEventListener('click', numberActions);
seven.addEventListener('click', numberActions);
eight.addEventListener('click', numberActions);
nine.addEventListener('click', numberActions);

function numberActions(){
	maxNumbers();
	if (full === true){
		return;
	}
	removeZero();
	newExpression();
	tempArray.push(this.getAttribute("data-value"));
	console.log(this.getAttribute("data-value"));
	display.value = tempArray.join('');
};

decimal.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	var stringCheck = tempArray.join('');
	if (display.value === '0' && tempArray[0] !== 0){
		tempArray.push(0);
		tempArray.push('.');
	} else if (tempArray.length < 1 && array.length >= 1){
		tempArray = [];
		tempArray.push(0);
		tempArray.push('.');
	} else if (stringCheck.search(/[.]/g) < 1){
		tempArray.push('.');
	}
	newExpression();
	display.value = tempArray.join('');
	display.style.direction = 'ltr';
	display.style.textAlign = 'right';
});
