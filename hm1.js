'use strict'

    let number = Number(prompt('Введите желаемое число'))
    while(isNaN(number)){
        number = Number(prompt('Введите число!!!'))
    }
let getSum = () => {
    let sum = 0
    for(let i = 0; i<=number;i++){
        sum+=i
    }
    console.log(sum);
}
getSum()