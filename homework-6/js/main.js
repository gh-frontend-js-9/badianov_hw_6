console.log ("First task");


let arr = [1, 2, 3, 2];

let sum = (a, b) => a + b;
console.log ("Sum of numbers is: " + arr.reduce(sum));

let arr2 = [-1, 2, 4];
let min = Math.min.apply(Math, arr2);
let max = Math.max.apply(Math, arr2);
console.log ("Min value is: " + min);
console.log ("Max value is: " + max);


console.log ("Second task");


console.log ("Third task");



function replac (value){

	let replaceable = value;
	for ( ; replaceable < 22; replaceable++ ) {
	    if ( replaceable % 3 === 0 && replaceable % 7 === 0 ){
	        console.log( replaceable, " = foobar" )
	    } else {
	        if ( replaceable % 3 === 0 ){
	            console.log( replaceable, " = foo" );
	        } else {
	            if ( replaceable % 7 === 0 ){
	                console.log( replaceable, " = bar" );
	            } 
	        }
	    }
	}
}
replac (15);



console.log ("Fourth task");


function word_correspond (first_param, second_param) {
	let word1 = first_param;
	let word2 = second_param;
	let len = 0;
	for (var i = 0; i < word1.length; i++) {
		for (var j = 0; j < word2.length; j++) {
			if (word1[i] == word2[j]){
				len++;
			}
		}
	}	
	console.log ("1 = " + word1);
	console.log ("2 = " + word2);

	let percent = len/(word1.length + word2.length) * 100;
	console.log (percent +"%");
}
word_correspond ("Sensible", "Sensitive");