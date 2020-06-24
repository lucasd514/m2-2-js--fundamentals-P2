// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

let keepLong = ["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"];

function keepThese(word) {
  return word.length > 5;
}
//the array needs to be stored somewhere otherwise poof, gone.
function toBeFiltered(arr) {
  const newArray = arr.filter(keepThese);
  return newArray;
}
