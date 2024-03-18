'use strict'

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
const funcIsIsogram = (string) => {
    string = string.toLowerCase()
    for(let i = 0; i<string.length; i++){
        for(let j = i+1; j<string.length; j++){
            if(string[i]===string[j]){
                return console.log('false');
            } 
        }
    }
    return console.log('true');
}
funcIsIsogram('abs')