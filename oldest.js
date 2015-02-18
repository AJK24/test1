var data = require('./ancestry.js');
var ancestry = JSON.parse(data);

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

//I CHANGed the annoynmous function to only include those 5-15
var overNinety = ancestry.filter(function(person) {
  temp =  person.died - person.born;
  if((temp >= 5) && (temp <=15))
	return temp;
});
console.log(map(overNinety, function(person) {
  return person.name;
}));
