'use strict'

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for(let key in student){
    console.log(key);
}
for(let key in student){
    console.log(student[key]);
}