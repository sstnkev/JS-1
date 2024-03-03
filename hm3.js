'use strict'

const trimString = () =>{
    let string = prompt('Введите строку')
    let from = Number(prompt('С какого индекса начинаем обрезать?'))
    while(isNaN(from)){
        from = Number(prompt('С какого индекса начинаем обрезать?!!!'))
    }
    let to = Number(prompt('Каким индексом заканчиваем?'))
    while(isNaN(to)){
        to = Number(prompt('Каким индексом заканчиваем?!!!'))
    }
    let finnalyString = string.slice(from, to)
    console.log(finnalyString);
}
trimString()