// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q9
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

let array = ["jim", "john", "joe"]


function greet(lst) { 
  const newgreet = lst.map(function(e){
    if (e.length >= 4) {return "Yo  " + e;}
    
  }); console.log(newgreet);

}

// -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Jim']));
