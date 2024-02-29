'use strict'

let age = Number(prompt())
if(!isNaN(age)){
    if(age>=18){
        console.log('Попей пивка');
    }
    if(age<18){
        console.log('Пей колу');
    }
    if(age>=16 && age <18){
        console.log('Можешь выкурить сигаретку, только маме не говори');
    }
}
else console.log('Это не число');