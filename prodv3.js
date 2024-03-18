'use strict'


// accum('abcd') // -> 'A-Bb-Ccc-Dddd'
// accum('RqaEzty') // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// accum('cwAt') // -> 'C-Ww-Aaa-Tttt'
const accum = (string) =>{
    let newString = ''
    for(let i = 0; i<string.length; i++){
        newString += string[i].toUpperCase()+string[i].toLowerCase().repeat(i) + '-'  // заполняю новую строку посимвольно с большой буквы, а методом repeat по значению индекса заполняю маленькими буквами 
    }
    let stringWithoutTire = newString.slice(0,newString.length-1)
    return stringWithoutTire
}
console.log(accum('asd'));