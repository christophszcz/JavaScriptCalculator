var array = [];

/* Numbers */

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

/* Operations */
var addition = document.getElementById('addition');
var addition = document.getElementById('addition');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');

one.addEventListener('click', function(){
	array.push(1);
});

two.addEventListener('click', function(){
	array.push(2);
});

three.addEventListener('click', function(){
	array.push(3);
});

addition.addEventListener('click', function(){
	sum = array.reduce(add, 0);  
	function add(a, b) {     
		return a + b; 
	}  
});

clear.addEventListener('click', function(){
	array = [];
});
