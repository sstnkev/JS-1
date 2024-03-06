'use strict'

const averageValue = () => {
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
        ]
        let counter = 0
        let sum = 0
        let average = 0
        
        for(let i = 0; i<matrix.length ; i++){
                sum+=matrix[i]
                counter++
        }
                                              //   не понимаю как сделать(пробовал вложенности , но нет) обхясни подробно))
        console.log(sum);
        average = sum/counter
        console.log(average);
}
averageValue()