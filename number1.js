//Andrew Klump
//CMP237
//Test 1
//Feb 2015
//1. (4 points) Write a program that declares a variable, assigns it a value, and then somehow changes it by using one of the basic control structures. Be sure to print the result.


var changer = 42;

//a multiplier function
function multiplier(number, multiplier){ //sends the number and the multiplier
	if(multiplier > 10){		//if multiplier is greater than 10
		multiplier = multiplier/2;	//divide it in half
		console.log(multiplier);	//print multiplier in this case
	}
	else{	//if multiplier not greater than 10 divide number by 2.
		number = number/2;
		console.log(number);	//print number
	}
return number*multiplier;	//returns the number mulitplied.
}

//runs and prints the answer
console.log(multiplier(changer, 12));
