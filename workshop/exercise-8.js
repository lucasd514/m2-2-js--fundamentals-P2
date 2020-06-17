// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q8
// Adds "Hello " to every element of greet
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]

// lst is an array of strings
let array = ["jim", "john", "joe"]

function greet(lst) { 
  const newgreet = lst.map(function(e){
    return "Yo  " + e;
  }); console.log(newgreet);

}


