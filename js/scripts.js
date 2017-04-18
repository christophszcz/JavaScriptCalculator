var tempArray = [], array = [];
var display = document.getElementById('display');
var full = false;
var addCounter = 0;

function maxNumbers(){
	if(tempArray.length > 7){
		full = true;
	}
}

/* Numbers */

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

zero.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	tempArray.push(0);
	display.value = tempArray.join('');
});

one.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	tempArray.push(1);
	display.value = tempArray.join('');
});

two.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	tempArray.push(2);
	display.value = tempArray.join('');
});

three.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	tempArray.push(3);
	display.value = tempArray.join('');
});

four.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	tempArray.push(4);
	display.value = tempArray.join('');
});

five.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	tempArray.push(5);
	display.value = tempArray.join('');
});

six.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	}
	tempArray.push(6);
	display.value = tempArray.join('');
});

seven.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	} 
	tempArray.push(7);
	display.value = tempArray.join('');
});

eight.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	} 
	tempArray.push(8);
	display.value = tempArray.join('');
});

nine.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	} 
	tempArray.push(9);
	display.value = tempArray.join('');
});

decimal.addEventListener('click', function(){
	maxNumbers();
	if (full === true){
		return;
	} 
	tempArray.push('.');
	display.value = tempArray.join('');
	display.style.direction = 'ltr';
	display.style.textAlign = 'right';
});

/* Operations */
var addition = document.getElementById('addition');
var subtraction = document.getElementById('subtraction');
var multiplication = document.getElementById('multiplication');
var division = document.getElementById('division');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');

/* Addition */

function additionFunction(){
	additionFunction.called = true;
	addCounter ++;

	// if (array.length >= 2){
	// 	var sum = array.reduce(add, 0);  
	// 	function add(a, b) {     
	// 		return a + b; 
	// 	} 
	// 	array = [];
	// 	array.push(sum);
	// }
	if (tempArray.length >= 1){
    var multipleDigits = tempArray.join('');
		// var trueNum = parseInt(multipleDigits);
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		display.value = array[array.length - 1];
		tempArray = [];
		full = false;
	} else if (typeof sum !== 'undefined'){
		array = [];
		array.push(sum);
	}
}

addition.addEventListener('click', additionFunction);

/* Subtraction */

function subtractionFunction(){
	subtractionFunction.called = true;
	if (tempArray.length >= 1){
    var multipleDigits = tempArray.join('');
		// var trueNum = parseInt(multipleDigits);
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];
		full = false;
	} else if (typeof difference !== 'undefined'){
		array = [];
		array.push(difference);
	}
}

subtraction.addEventListener('click', subtractionFunction);

/* Multiplication */

function multiplicationFunction(){
	multiplicationFunction.called = true;
	if (tempArray.length >= 1){
    var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];
		full = false;
	} else if (typeof product !== 'undefined'){
		array = [];
		array.push(product);
	}
}

multiplication.addEventListener('click', multiplicationFunction);

/* Division */

function divisionFunction(){
	divisionFunction.called = true;
	if (tempArray.length >= 1){
    var divisionDigits = tempArray.join('');
		var trueNum = parseFloat(divisionDigits);
		array.push(trueNum);
		tempArray = [];
		full = false;
	} else if (typeof quotient !== 'undefined'){
		array = [];
		array.push(quotient);
	}
}

division.addEventListener('click', divisionFunction);

/* Clear */ 

clear.addEventListener('click', function(){
	display.style.direction = 'RTL';
	array = [];
	tempArray = [];
	display.value = "";
	full = false;
});

/* Equals */

equals.addEventListener('click', function (){
	var multipleDigits = tempArray.join('');
	// var trueNum = parseInt(multipleDigits);
	var trueNum = parseFloat(multipleDigits);
	array.push(trueNum);
	tempArray = [];
	display.value = "";

	if (additionFunction.called ){
		sum = array.reduce(add, 0);  
		function add(a, b) {     
			return a + b; 
		}  
		console.log(sum);
		display.value = sum;
	} else if (subtractionFunction.called ){
		while(array.length > 1){
			var i = 0, j = 1;
			var difference = array[i] - array[j];
			array.splice(0,2);
			array.unshift(difference);
		}
		console.log(difference);
		if(difference < 0){
			display.style.direction = 'ltr';
			display.style.textAlign = 'right';
		}
		display.value = difference;   
	} else if (multiplicationFunction.called ){
		product = array.reduce(multiply);  
		function multiply(c, d) {     
			return c * d; 
		}  
		console.log(product);
		display.value = product;
	} else if (divisionFunction.called ){
		quotient = array.reduce(divide);  
		function divide(e, f) {
			if (f === 0){
				return 'UNDEFINED';
			} else{
				return e / f; 
			}
		}  
		console.log(quotient);
		display.value = quotient;
	}

	additionFunction.called = false;
	subtractionFunction.called = false;
	multiplicationFunction.called = false;
	divisionFunction.called = false;
});
