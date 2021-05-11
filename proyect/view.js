const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Tip Calculator App',{horizontalLayout: 'full'}
        )
    )
}

function getTable(model) {
    return [
        {
            "Bill Amount": `$ ${model.billAmount}`,
            "Tip (%)": `${model.percentage}`,
            "Tip": `$ ${model.tip}`,
            "Total": `$ ${model.total}`
        }];

    
}

function questions(model) {

    const {billAmount, percentage} = model
    const question1 = 'Bill Amount?'
    const question2 = 'Tip(%)?'

    return  inquirer.prompt([
        {
            type: 'input',
            name: 'billAmount',
            message: question1,
            default: billAmount
        },
            
        {
            type: 'input',
            name: 'percentage',
            message: question2,
            default: percentage
        }
    ])

}

function view(model) {
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    questions
}