'use strict'

let num = prompt()
if(num%2==0){
    console.log('Число четное', num);
}
if(num%2!=0){
    console.log('Число нечетное', num);
}
if(typeof num=='string'){
    alert('Это не число')
}
if (num==undefined){
    console.log('Вы ничего не ввели');
}