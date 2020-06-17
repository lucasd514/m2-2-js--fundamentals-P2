// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

function avg(lst) {
    let total = 0;
    lst.forEach(function (mark) {
      total += mark;
    });
    return Math.round(total / lst.length);
  }
//used solution to understand
  function ltravg(lst) {
    let mark = 'A';
  
    if (grade < 90) mark = 'B';
    if (grade < 80) mark = 'C';
    if (grade < 70) mark = 'D';
    if (grade < 60) mark = 'F';
  
    return ltravg;
  }

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
