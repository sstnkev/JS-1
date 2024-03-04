'use strict'

let object = {
    name: 'nikita',
    age: 18,
};

let myKey = 'age';

if (myKey in object) {
    console.log('true');
} else {
    console.log('false');
}
