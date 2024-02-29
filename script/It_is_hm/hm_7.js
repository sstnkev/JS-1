'use strict'

let storona = prompt('Введите yug , zapad , sever или vostok для направления в данные части света')
while(storona !='yug' && storona !='sever' && storona !='zapad' && storona !='vostok '){
   storona = prompt('Введите корректную часть света')
}

switch(storona){
    case 'yug' : console.log('на юг пойдешь счастье найдешь');
    break
    case 'sever' :console.log('на север пойдешь много денег найдешь');
    break
    case 'zapad' :console.log('на запад пойдешь верного друга найдешь');
    break
    case 'vostok' :console.log('на восток пойдешь разработчиком станешь');
    break
}
