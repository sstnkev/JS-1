'use strict'


const numbers = [5, 43, 63, 23, 90]
// let spliceNumber = numbers.splice(0,5) //      1 способ
// console.log(numbers);



for(let i = 0; i<numbers.length; i++){   // 2 способ
    numbers[i]=undefined
}
console.log(numbers);