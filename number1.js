//Andrew Klump
//CMP237
//Test 1
//Feb 2015
//1. (4 points) Write a program that declares a variable, assigns it a value, and then somehow changes it by using one of the basic control structures. Be sure to print the result.

//changer is global variable
var changer = 42;


//a function that multiplies the 2 numbers
function multiplier(number, multiplier){
	if(multiplier > 10){ //divides the multiplier by 2 if its greater than 10
		multiplier = multiplier/2;
		console.log(multiplier);	//prints it
	}
	else{	//otherwise divides number by 2 and prints it
		number = number/2;
		console.log(number);
	}
return number*multiplier;
}

console.log(multiplier(changer, 12));
