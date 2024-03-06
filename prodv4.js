'use strict'
let length = 10
let degree = 3
let cubeArray = []
const theFirstArray = []
for(let i = 0; i<length; i++){
    let number = Math.trunc(Math.random()*100) // trunc отбрасывает десятичную часть от числа, рандом понятно , *100 (от 0 и до 100 будут числа)
    theFirstArray.push(number)
}
for(let i = 0; i<length; i++){
    let cubeArrayNumber = Math.pow(theFirstArray[i], degree)
    cubeArray.push(cubeArrayNumber)
}
console.log(theFirstArray);
console.log(cubeArray);
