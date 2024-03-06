'use strict'


const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
let newPositiveArray = []
let newNegativeArray = []
for(let i=0; i<mixedNumbers.length; i++){
    if(mixedNumbers[i]>=0){
        newPositiveArray.push(mixedNumbers[i])
    } else {newNegativeArray.push(mixedNumbers[i])}
} 
console.log(newPositiveArray);
console.log(newNegativeArray);
