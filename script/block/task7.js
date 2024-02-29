'use strict'
let sum=0
for(let i=0; i<=20; i++){
    if(i%5==0){
        continue
    }
    if(sum>16){
        break
    }
    sum += i
}
console.log(sum);