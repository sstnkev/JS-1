'use strict'



const getSumNumbers = () =>{
    let number = Number(prompt('Введите желаемое число'))
    while(isNaN(number)){
        number = Number(prompt('Введите число!!!'))
    }
    let stringNumber = String(number)
    let sum = 0
    for(let i = 0; i< stringNumber.length ; i++){
        sum += parseInt(stringNumber[i])        
    }
    console.log(sum);
}
getSumNumbers()
