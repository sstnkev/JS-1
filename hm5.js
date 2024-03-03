'use strict'
const getSum = (a,b) => {
    a = Number(prompt('Введите число a'))
    while(isNaN(a)){
        a = Number(prompt('Введите число!!!'))
    }
    b = Number(prompt('Введите число b'))
    while(isNaN(b)){
        b = Number(prompt('Введите число!!!'))
    }
    if(a===b) return a
    let sum = 0
    for(a;a<=b;a++){
        sum += a
    }
    console.log(sum);
}
getSum()