'use strict'

let string = prompt()
let someString = string ?? undefined
if(someString==string){
    console.log(someString);   
}
else{
    someString='Default string'
    console.log(someString);
}