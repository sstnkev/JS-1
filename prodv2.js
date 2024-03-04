'use strict'


let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
const funcForCompareTheseObjects = () => {
    const keys1 = Object.keys(student1);
    const keys2 = Object.keys(student2);
    for(let key in keys1){
        if(student1[key] !== student2[key]){
            console.log('False');
            return
        } else console.log('True');
    }
}
funcForCompareTheseObjects()