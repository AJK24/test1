//Andrew Klump
//CMP237
//test 1
//feb 2015
//4. (4 points) Write a program that demonstrates nested scope.

var globe = 100; //example of a global variable

function showScope(testlocal){
	//local variable only to this function
	var functLocal = 5;
	
	
	console.log(testlocal); //test local is passed from another function but is still a local variable, just not in this function
	
	globe = globe/2;	//divides it by 2



}

//creates a local variable
function showlocal(){
	passedLocal = 4; //creates a local variable

return passedLocal;	//returns it to be used outside of variable.
}
console.log(showScope(showlocal()));
//console.log(functLocal); cannot be printed because no access.
//console.log(testlocal); //canot be printed because no access globally
//same for passedLocal, no access globally.
console.log('globe ' + globe);


