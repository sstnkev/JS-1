'use strict'

// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
let func = () =>{
    let num = Number(prompt())
    if(!isNaN(num)){
        if(num%3==0 && num%5==0){
            console.log('FizBuz');
            return 
        }
        if(num%5==0){
            console.log('Fiz');
            return 
        }
        if(num%3==0){
            console.log('Buz');
            return 
        }
    } else console.log('Это не число');
}
func()