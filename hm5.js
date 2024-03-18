'use strict'

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const evenFirstNumber = numbers.find((number)=>number%2===0)
console.log(evenFirstNumber);