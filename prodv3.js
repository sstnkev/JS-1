'use strict'


const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}
animals.bird = 'Maga'
for(let key in animals){
    console.log(animals[key]);
} 

