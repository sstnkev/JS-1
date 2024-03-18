'use strict'

let string = prompt('Введите комментарий на английском')
let splitString = string.split('')
let newString = []
for(let i = 0; i<splitString.length; i++){
        if(splitString[i]==='a'|| splitString[i]==='e' || splitString[i]==='i'|| splitString[i]==='o'|| splitString[i]==='u') {
                continue
        }
        newString[i] = splitString[i]
}
let joinString = newString.join('')
console.log(joinString); 
