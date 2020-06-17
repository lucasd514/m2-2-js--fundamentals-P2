// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

// Remember that it requires a function as its parameter.

function avg(lst) {
  let total = 0;
  lst.forEach(function (mark) {
    total += mark;
  });
  return Math.round(total / lst.length);
}
console.log(calculateAverage([76, 60, 83, 100, 78]));
