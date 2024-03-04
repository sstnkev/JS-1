'use strict'
const funcForFootballScore = () => {
    let scoreTheFirstTeam = Number(prompt('Число забитых голов первой команды'))
    let scoreTheSecondTeam = Number(prompt('Число забитых голов второй команды'))
    if(scoreTheFirstTeam>9 || scoreTheSecondTeam>9){
        console.log('В нашем футболе такого нет)');
        return
    }
    const gameScore = {
        0:'ноль',
        1:'один',
        2:'два',
        3:'три',
        4:'четыре',
        5:'пять',
        6:'шесть',
        7:'семь',
        8:'восемь',
        9:'девять',
    }
    let home = gameScore[scoreTheFirstTeam]
    let guest = gameScore[scoreTheSecondTeam]
    console.log(`Счёт игры ${home}:${guest}`);
}
funcForFootballScore()