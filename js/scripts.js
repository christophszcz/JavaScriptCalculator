var array = [];

/* Operations */
var addition = document.getElementById('addition');
var one = document.getElementById('one');
var addition = document.getElementById('addition');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');

one.addEventListener('click', function(){
	array.push(1);
});

addition.addEventListener('click', function(){
	sum = array.reduce(add, 0);  
	function add(a, b) {     
		return a + b; 
	}  
});
