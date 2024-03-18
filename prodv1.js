'use strict'

function student (salary, rate,name){
    this.salary = salary
    this.rate = rate
    this.name = name

    this.calculateCredit = function(){
        switch(this.rate){
            case'A': return 12*this.salary
            case'B': return 9*this.salary
            case'C': return 6*this.salary
            case'D': return 0
        }
    }
}

let Pavel = new student(1000, 'C', 'Pavel')
let Nikita = new student(2000, 'A', 'Nikita')
let Artem = new student(3000, 'A', 'Artem')
let Dzmitry = new student(4000, 'D', 'Dzmitry')
let Alexey = new student(5000, 'B', 'Alexey')
const students = [Pavel, Nikita, Artem, Dzmitry, Alexey]

function calculateTotalCredit(students) {
    let totalCredit = 0;
    for (let i = 0; i < students.length; i++) {
      totalCredit += students[i].calculateCredit();
    }
    return totalCredit;
  }
  const totalCredit = calculateTotalCredit(students); // позволяет повторно использовать в других местах кода(если нужно)
  console.log('Общая сумма кредита:', totalCredit);