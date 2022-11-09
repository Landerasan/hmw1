#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
.option('year', {
    alias: 'y',
    type: 'boolean'
})
.option('month', {
    alias: 'm',
    type: 'boolean'
})
.option('date', {
    alias: 'd',
    type: 'boolean'
})
.command(['current'], 'get current date', {}, (argv) => {
    current(argv)
}
)
.command(['add'], 'add to current date', {}, (argv) => {
    add(argv)
})
.command(['sub'], 'sub from current date', {}, (argv) => {
    sub(argv)
})
.argv

function current(arg){
    if(arg.year){
        console.log(new Date().getFullYear())
    }
    else if(arg.month){
        console.log(new Date().getMonth())
    }
    else if(arg.date){
        console.log(new Date().getDate())
    }
    else{
        console.log(new Date())
    }
}

function add(arg){
    if(arg.year){
        console.log(addYears(arg._[1], "add"))
    }
    else if(arg.month){
        console.log(addMonths(arg._[1], "add"))
    }
    else if(arg.date){
        console.log(addDays(arg._[1], "add"))
    }
}

function sub(arg){
    if(arg.year){
        console.log(addYears(arg._[1], "sub"))
    }
    else if(arg.month){
        console.log(addMonths(arg._[1], "sub"))
    }
    else if(arg.date){
        console.log(addDays(arg._[1], "sub"))
    }
}

function addDays(days, type) {
    let date = new Date()
    if(type == "add"){
        date.setDate(date.getDate() + days)
    }
    else{
        date.setDate(date.getDate() - days)
    }
    return date
}

function addMonths(months, type) {
    let date = new Date()
    if(type == "add"){
        date.setMonth(date.getMonth() + months)
    }
    else{
        date.setMonth(date.getMonth() - months)
    }
    return date
}

function addYears(years, type) {
    let date = new Date()
    if(type == "add"){
        date.setFullYear(date.getFullYear() + years)
    }
    else{
        date.setFullYear(date.getFullYear() - years)
    }
    return date
}