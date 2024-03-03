'use strict'


const funcDivideChoсolate = (n,m) => {
    n = Number(prompt('Введите длину плитки'))
    m = Number(prompt('Введите ширину плитки'))
    if(n<=0 || m<=0){
        console.log('0 надломов');
        return
    }
    let sumKubOfChocolate = n*m
    let minFracture = sumKubOfChocolate-1
    if(isNaN(minFracture)){
        console.log('0 надломов');
        return
    }
    console.log('Минимальное количество надломов',minFracture);
}
funcDivideChoсolate()