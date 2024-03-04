'use strict'

let login = prompt('Введите желаемый логин')
let password = prompt('Введите пароль для авторизации')
const autorize = {
    log: 0,
    pass:0,
};
autorize.log = login
autorize.pass = password
let autorizeLogin = prompt('Для входа введите логин')
let autorizePassword = prompt('Введите пароль для входа')
if(autorizeLogin === login && autorizePassword === password) console.log('Добро пожаловать');
else console.log('Данные введены неверно');
