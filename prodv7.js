'use strict'

const funcDublicate = (string) => {
    let total = ''
    string = string.toLowerCase()
    for(let i = 0; i,string.length; i++){
        let flagFound = false
        for(let j = i+1; j<string.length; j++){
            if(string[j] === string[i]){
                flagFound = true
                break
            }  
        }
        if(flagFound){
            total += ')'
        } else total += '('
    }    
    return total
}
funcDublicate('abc')
