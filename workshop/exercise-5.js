// Q5
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

c;

function itemIsPresent(mystuff, object) {
  return mystuff.includes(object);
}

// Test case
const lucas = [
  "roma",
  "totti",
  "ddr",
  "curvaSud",
  "batigol",
  "daje",
  "1927",
  "spqr",
];

console.log(itemIsPresent(lucas, "roma"));
console.log(itemIsPresent(lucas, "lazio")); // this will never be present in any list i do ever
