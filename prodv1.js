'use strict'

const funcForNumber = (a,b,c) => {
    a = Number(prompt('Введите число a'))
    while(isNaN(a)){
        a = Number(prompt('Введите число!!!'))
    }
    b = Number(prompt('Введите число b'))
    while(isNaN(b)){
        b = Number(prompt('Введите число!!!'))
    }
    c = Number(prompt('Введите число c'))
    while(isNaN(c)){
        c = Number(prompt('Введите число!!!'))
    }
    if(a+b>c && b+c>a && c+a>b){
        console.log('True');
    }
    else console.log('False');
}
funcForNumber()