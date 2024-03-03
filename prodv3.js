'use strict'


const funcOfBankCredit = () =>{

    let bankCredit = Number(prompt('Введите сумму желаемого кредита для покупки'))
    while(isNaN(bankCredit)){
        bankCredit = Number(prompt('Неверное значение. Введите сумму желаемого кредита для покупки ещё раз'))
    }
    const mobilePrice = 1000
    const accessoryPrice = 100
    const taxProzent = 0.13
    let tax = (mobilePrice + accessoryPrice)*taxProzent
    let allPriceForOneProduct = mobilePrice + accessoryPrice + tax
    let roundedAllPriceForOneProduct = Math.round(allPriceForOneProduct * 100) / 100;

    if(roundedAllPriceForOneProduct>bankCredit){
        console.log('Недостоточно средств для покупки');
        return
    }
    let sumOfPurchase = Math.floor(bankCredit / roundedAllPriceForOneProduct)
    console.log(`Приобретено ${sumOfPurchase} смартфонов и ${sumOfPurchase} акссесуаров`);
    let loanBalance = bankCredit - (roundedAllPriceForOneProduct*sumOfPurchase)
    console.log('Сумма оставшегося кредита', loanBalance);
}
funcOfBankCredit()

