// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

const greater = function (n1, n2) {
  return Math.max(n1, n2);
};

console.log(greater(999, 2222));

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

//uponreviewing this, i can just use the same function and call it again

let greatest = greater(greater(27, 17), greater(89, 19));
console.log(greatest);

// Q3.3
// Would this work with more integers?

//yeah this works, a little redundent to code but it works
let greatest =
  (greater(greater(27, 17), greater(89, 19)),
  greater(greater(27, 17), greater(555, 19)));
