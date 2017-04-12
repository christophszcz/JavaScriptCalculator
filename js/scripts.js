var tempArray = [], array = [];

/* Numbers */

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

one.addEventListener('click', function(){
	tempArray.push(1);
});

two.addEventListener('click', function(){
	tempArray.push(2);
});

three.addEventListener('click', function(){
	tempArray.push(3);
});

/* Operations */
var addition = document.getElementById('addition');
var subtraction = document.getElementById('subtraction');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');


addition.addEventListener('click', function additionFunction(){
	var multipleDigits = tempArray.join('');
	var trueNum = parseInt(multipleDigits);
	array.push(trueNum);
	tempArray = [];
});

subtraction.addEventListener('click', function(){
	while(array.length > 1){
		var i = 0, j = 1;
		var difference = array[i] - array[j];
		array.splice(0,2);
		array.unshift(difference);
	}
});

clear.addEventListener('click', function(){
	array = [];
});

equals.addEventListener('click', function (){
	var multipleDigits = tempArray.join('');
	var trueNum = parseInt(multipleDigits);
	array.push(trueNum);
	tempArray = [];

	if (array.length > 1){
		sum = array.reduce(add, 0);  
		function add(a, b) {     
			return a + b; 
		}  
		console.log(sum);
	}
});
