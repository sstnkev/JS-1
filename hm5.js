'use strict'

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}
let sumOfMoney = 0
let count = 0
for(let key in salaries){
    sumOfMoney+=salaries[key]
    count++
}
let sumOfMoneyMiddle = sumOfMoney/count
console.log(sumOfMoneyMiddle);