'use strict'

const thisIsPolindrom = () => {
    let string = prompt(['Введите слово для проверки на полиндром'])
    while(typeof(string)!== 'string'){
        string = prompt(['Введите СЛОВО для проверки на полиндром'])
    }
    let symbolString = string.split('')

    let reverseArray = symbolString.slice().reverse();

    if(symbolString.join() === reverseArray.join()){
        console.log(`${string} является палиндромом`);
    } else console.log(`${string} не является полиндромом`);
}
thisIsPolindrom()