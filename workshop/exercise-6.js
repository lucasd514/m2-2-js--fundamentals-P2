// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q6
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.

// used the solution heavy for this one, as a jump off for the next ones... took me a while to 
//sort of get it

function removeEvens(lst) {
  const evens = lst.filter(function (number) {
    return number % 2 !== 0;
  });

  return evens;
}
// -------------------------------------------------------------------------
console.log('Q4 removeEvens()', removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

