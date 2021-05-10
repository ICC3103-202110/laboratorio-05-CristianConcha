

const prompt = require('prompt-sync')();
const { printTable } = require('console-table-printer');
var inquirer = require('inquirer');


const view = require('./view.js');
const update = require('./update.js');


function app(amount, tip) {
    
    console.clear();

    //Table
    const t = [{ "Bill Amount": `$ ${amount}`, "Tip (%)": `$ ${tip}`, "Tip": `$ ${amount}`, "Total": `$ ${amount}`}];
    printTable(t);

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