'use strict'

// highAndLow('1 2 3 4 5') // return '5 1'
// highAndLow('1 2 -3 4 5') // return '5 -3'
// highAndLow('1 9 3 4 -5') // return '9 -5'
function highAndLow(numbersString) {
    let numbersArray = numbersString.split(" ").map(Number);
    let max = Math.max(...numbersArray);
    let min = Math.min(...numbersArray);
    return max + " " + min;
  }
console.log(highAndLow('3 2 1 5 8 1 3')); 