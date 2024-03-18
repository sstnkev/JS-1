'use strict'

const funcForAscii = (string) => {
    let total1 = '';
    for (let i = 0; i < string.length; i++) {
      const char = string.charCodeAt(i);
      total1 += char + ' ';
    }
    total1 = total1.slice(0,-1) // убираем пробел
    
  
    let total2 = total1.replace(/7/g, '1'); // разобрался,/7/ шаблон для поиска ОДНОЙ 7 в строке, а g - флаг глобального поиска по всей строке, замена на 1
    const sumTotal1 = Array.from(total1).reduce((accum, num) => accum + Number(num),0)
    const sumTotal2 = Array.from(total2).reduce((accum, num) => accum + Number(num),0)
    return sumTotal1 - sumTotal2
  };
  
  console.log(funcForAscii('abc'));
