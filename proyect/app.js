


const { printTable } = require('console-table-printer');
const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');



const view = require('./view.js');
const update = require('./update.js');


function app(amount, tip) {
    
    console.clear();
    //Name

    console.log(chalk.magenta(figlet.textSync("Tip Calculator App")));
    
    //Table
    const t = [{ "Bill Amount": `$ ${amount}`, "Tip (%)": `$ ${tip}`, "Tip": `$ ${amount}`, "Total": `$ ${amount}`}];
    printTable(t);

    //Questions
    inquirer
        .prompt([
        {   type: 'input',
            name: 'amount',
            message: 'Bill Amount?',
            default: amount
            },
            
        {   type: 'input',
            name: 'tip',
            message: 'Tip(%)?',
            default: tip
            }
        ])

    .then(answers => {
        amount = answers.amount;
        tip = answers.tip;
    })


    

    

    
}
app(0,0);