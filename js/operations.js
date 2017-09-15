// Operations  

var addition = document.getElementById('addition');
// var subtraction = document.getElementById('subtraction');
var multiplication = document.getElementById('multiplication');
var division = document.getElementById('division');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');
var clearLast = document.getElementById('last-clear');

// Addition  

function additionFunction(){
	if (array.length >= 1 && tempArray.length < 1){
		subtractionFunction.called = false;
		multiplicationFunction.called = false;
		divisionFunction.called = false;
	}
 
	var equalsFunctionCalled = false;

	additionFunction.called = true;
	if (subtractionFunction.called){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];

		while(array.length > 1){
			var i = 0, j = 1;
			var difference = array[i] - array[j];
			array.splice(0,2);
			array.unshift(difference);
		}
		if(difference < 0){
			display.style.direction = 'ltr';
			display.style.textAlign = 'right';
		}
		array = [];
		array.push(difference);
		subtractionFunction.called = false;
		difference = undefined;
	}

	if (multiplicationFunction.called){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];
		display.value = "";

		product = array.reduce(multiply);  
		function multiply(c, d) {     
			return c * d; 
		}  
		console.log(product);
		display.value = product;
		array = [];
		array.push(product);
		multiplicationFunction.called = false;
		product = undefined;
	}

	if (divisionFunction.called ){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];
		display.value = "";
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
		array = [];
		array.push(quotient);
		divisionFunction.called = false;
		quotient = undefined;
	}

	if (tempArray.length >= 1){
    var multipleDigits = tempArray.join('');
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

// Subtraction  

function subtractionFunction(){
	if (tempArray.length < 1 && array.length < 1 && Math.sign(array[0]) !== -1 ){
		return;
	} else if (tempArray.length > 1 || array.length >= 1 || Math.sign(tempArray[0]) === 1 || tempArray[0] === 0) {
		if (array.length >= 1 && tempArray.length < 1){
			additionFunction.called = false;
			multiplicationFunction.called = false;
			divisionFunction.called = false;
		}

		var equalsFunctionCalled = false;

		subtractionFunction.called = true;
		if (additionFunction.called ){
			var multipleDigits = tempArray.join('');
			var trueNum = parseFloat(multipleDigits);
			array.push(trueNum);
			tempArray = [];

			sum = array.reduce(add, 0);  
			function add(a, b) {     
				return a + b; 
			}  
			console.log(sum);
			array = [];
			array.push(sum);
			additionFunction.called = false;
			sum = undefined;
		}

		if (multiplicationFunction.called){
			var multipleDigits = tempArray.join('');
			var trueNum = parseFloat(multipleDigits);
			array.push(trueNum);
			tempArray = [];
			display.value = "";

			product = array.reduce(multiply);  
			function multiply(c, d) {     
				return c * d; 
			}  
			console.log(product);
			display.value = product;
			array = [];
			array.push(product);
			multiplicationFunction.called = false;
			product = undefined;
		}

		if (divisionFunction.called ){
			var multipleDigits = tempArray.join('');
			var trueNum = parseFloat(multipleDigits);
			array.push(trueNum);
			tempArray = [];
			display.value = "";
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
			array = [];
			array.push(quotient);
			divisionFunction.called = false;
			quotient = undefined;
		}

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
}

subtraction.addEventListener('click', subtractionFunction);

// Multiplication  

function multiplicationFunction(){
	if (array.length >= 1 && tempArray.length < 1){
		additionFunction.called = false;
		subtractionFunction.called = false;
		divisionFunction.called = false;
	}

	var equalsFunctionCalled = false;

	multiplicationFunction.called = true;
	if (additionFunction.called ){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];

		sum = array.reduce(add, 0);  
		function add(a, b) {     
			return a + b; 
		}  
		console.log(sum);
		array = [];
		array.push(sum);
		additionFunction.called = false;
		sum = undefined;
	}

	if (subtractionFunction.called){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];

		while(array.length > 1){
			var i = 0, j = 1;
			var difference = array[i] - array[j];
			array.splice(0,2);
			array.unshift(difference);
		}
		if(difference < 0){
			display.style.direction = 'ltr';
			display.style.textAlign = 'right';
		}
		array = [];
		array.push(difference);
		subtractionFunction.called = false;
		difference = undefined;
	}

	if (divisionFunction.called ){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];
		display.value = "";
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
		array = [];
		array.push(quotient);
		divisionFunction.called = false;
		quotient = undefined;
	}

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

// Division 

function divisionFunction(){
	if (array.length >= 1 && tempArray.length < 1){
		additionFunction.called = false;
		subtractionFunction.called = false;
		multiplicationFunction.called = false;
	}

	var equalsFunctionCalled = false;

	divisionFunction.called = true;
	if (additionFunction.called ){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];

		sum = array.reduce(add, 0);  
		function add(a, b) {     
			return a + b; 
		}  
		console.log(sum);
		array = [];
		array.push(sum);
		additionFunction.called = false;
		sum = undefined;
	}

	if (subtractionFunction.called){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];

		while(array.length > 1){
			var i = 0, j = 1;
			var difference = array[i] - array[j];
			array.splice(0,2);
			array.unshift(difference);
		}
		if(difference < 0){
			display.style.direction = 'ltr';
			display.style.textAlign = 'right';
		}
		array = [];
		array.push(difference);
		subtractionFunction.called = false;
		difference = undefined;
	}

	if (multiplicationFunction.called){
		var multipleDigits = tempArray.join('');
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];
		display.value = "";

		product = array.reduce(multiply);  
		function multiply(c, d) {     
			return c * d; 
		}  
		console.log(product);
		display.value = product;
		array = [];
		array.push(product);
		multiplicationFunction.called = false;
		product = undefined;
	}

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

// Clear Last  

clearLast.addEventListener('click', function (){
	if (tempArray.length >= 1){
		tempArray = [];
		display.value = "0";
	} else if (additionFunction.called === true || subtractionFunction.called === true || multiplicationFunction.called === true || divisionFunction.called === true){
		additionFunction.called = false;
		subtractionFunction.called = false;
		multiplicationFunction.called = false;
		divisionFunction.called = false;
	} else{
		array = [];
		display.value = "0";
	} 
});  

// Clear  

clear.addEventListener('click', function(){
	display.style.direction = 'RTL';
	array = [];
	tempArray = [];
	display.value = "0";
	full = false;

	additionFunction.called = false;
	subtractionFunction.called = false;
	multiplicationFunction.called = false;
	divisionFunction.called = false;
	equalsFunctionCalled = false;
});

// Equals 

equals.addEventListener('click', function equalsFunction(){
	equalsFunctionCalled = true;

	if (tempArray.length >= 1){
		var multipleDigits = tempArray.join('');
		// var trueNum = parseInt(multipleDigits);
		var trueNum = parseFloat(multipleDigits);
		array.push(trueNum);
		tempArray = [];
		display.value = "";
	}
	
	if (additionFunction.called ){
		sum = array.reduce(add, 0);  
		function add(a, b) {     
			return a + b; 
		}  
		console.log(sum);
		display.value = sum;
		array = [];
		array.push(sum);
		sum = undefined;
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
		array = [];
		array.push(difference);
		difference = undefined;  
	} else if (multiplicationFunction.called ){
		product = array.reduce(multiply);  
		function multiply(c, d) {     
			return c * d; 
		}  
		console.log(product);
		display.value = product;
		array = [];
		array.push(product);
		product = undefined;
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
		array = [];
		array.push(quotient);
		quotient = undefined;
	} else {
		display.value = array[0];
	}

	additionFunction.called = false;
	subtractionFunction.called = false;
	multiplicationFunction.called = false;
	divisionFunction.called = false;
	full = false;

	var decimalRegex = /([.])\w+/g ;
	var currentValue = display.value;
	if (decimalRegex.test(display.value)){
		var decimal = currentValue.match(decimalRegex)[0];
		if(decimal.length >= 7){
			var decimalCutOff = (parseFloat(display.value)).toFixed(6); 
			display.value = decimalCutOff;
		}
	}
	if (currentValue > 9999999){
		var scientificNot = Number(currentValue).toExponential();
		console.log(scientificNot);
		numWZerosRemoved = scientificNot.toString();
		display.value = numWZerosRemoved;
		if (numWZerosRemoved.length > 8){
			var changeBackToNum = Number(numWZerosRemoved);
			display.value = changeBackToNum.toExponential(3);
		}
	}
});
