// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q10
// Returns true if every element of lst is of length at least 5.
// Otherwise returns false.
function allLong(lst) {
  return lst.every(function (word) {
    return word.length > 4;
  });
}

console.log(allLong(test));

let test = ["lucas", "jeff", "tony"];
