'use strict'

const fooBoo = () => {
    let boolean = prompt('Введите true или false')
    const foo = () =>{
        let nameF = 'foo'
        console.log(nameF);
    } 
    const boo = () =>{
        let nameB = 'boo'
        console.log(nameB);
    }
    if(boolean==='true'){
        foo()
    }
    else if(boolean==='false'){
        boo()
    }
}
fooBoo()