'use strict'



let number = Number(prompt('Введите желаемое сумму кредита'))
    while(isNaN(number)){
        number = Number(prompt('Введите числовое значение кредита!!!'))
    }
const funcForBank = (number) => {
    let prozent = 0.17
    let sumMoneyInFiveYear = 5*(number*prozent)
    console.log('Переплата' , sumMoneyInFiveYear);
}
funcForBank(number)
