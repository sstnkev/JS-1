'use strict'


    let num=Number(prompt('Введите любое число, большее 100'))
    while(num<100 || typeof num ==='string'){
        num=Number(prompt('Введите ещё раз любое число, большее 100'))

    }
console.log(num);
