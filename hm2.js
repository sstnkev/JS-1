'use strict'

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
const usersMember = users.map((user,index)=>{
    const counter = index
    return `member ${counter+1} ${user}`})

    console.log(usersMember);