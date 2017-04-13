var tempArray = [], array = [];

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

zero.addEventListener('click', function(){
	tempArray.push(0);
});

one.addEventListener('click', function(){
	tempArray.push(1);
});

two.addEventListener('click', function(){
	tempArray.push(2);
});

three.addEventListener('click', function(){
	tempArray.push(3);
});

four.addEventListener('click', function(){
	tempArray.push(4);
});

five.addEventListener('click', function(){
	tempArray.push(5);
});

six.addEventListener('click', function(){
	tempArray.push(6);
});

seven.addEventListener('click', function(){
	tempArray.push(7);
});

eight.addEventListener('click', function(){
	tempArray.push(8);
});

nine.addEventListener('click', function(){
	tempArray.push(9);
});

/* Operations */
var addition = document.getElementById('addition');
var subtraction = document.getElementById('subtraction');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');

/* Addition */

function additionFunction(){
	additionFunction.called = true;
	if (tempArray.length >= 1){
    var multipleDigits = tempArray.join('');
		var trueNum = parseInt(multipleDigits);
		array.push(trueNum);
		tempArray = [];
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
		var trueNum = parseInt(multipleDigits);
		array.push(trueNum);
		tempArray = [];
	} else if (typeof difference !== 'undefined'){
		array = [];
		array.push(difference);
	}
}

subtraction.addEventListener('click', subtractionFunction);

clear.addEventListener('click', function(){
	array = [];
});

equals.addEventListener('click', function (){
	var multipleDigits = tempArray.join('');
	var trueNum = parseInt(multipleDigits);
	array.push(trueNum);
	tempArray = [];

	if (additionFunction.called ){
		sum = array.reduce(add, 0);  
		function add(a, b) {     
			return a + b; 
		}  
		console.log(sum);
	} else if (subtractionFunction.called ){
		while(array.length > 1){
			var i = 0, j = 1;
			var difference = array[i] - array[j];
			array.splice(0,2);
			array.unshift(difference);
		}
		console.log(difference);
	}

	additionFunction.called = false;
	subtractionFunction.called = false;
});
