'use strict'

let num = Number(prompt('Введите число'))
while (isNaN(num)) {
    num = Number(prompt('Введите ЧИСЛО!'))
}
let minus = Number(prompt('Сколько отнять от исходного числа?'))
while (isNaN(minus)) {
    minus = Number(prompt('Вычитаеемое должно быть числом!'))
}
let plus = Number(prompt('Сколько прибавим?'))
while (isNaN(plus)) {
    plus = Number(prompt('Слогаемое должно быть числом!'))
}
let umnozhit = Number(prompt('На сколько умножаем?'))
while (isNaN(umnozhit)) {
    umnozhit = Number(prompt('Множитель должен быть числом!'))
}
let delit = Number(prompt('На сколько делим?'))
while (isNaN(delit)) {
    delit = Number(prompt('Делитель должен быть числом'))
}
let sum = (((num-minus)+plus)*umnozhit)/delit
alert(`((((${num}-${minus})+${plus})*${umnozhit})/${delit} = ${sum})`)
