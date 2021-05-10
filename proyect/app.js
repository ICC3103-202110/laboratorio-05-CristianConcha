

const prompt = require('prompt-sync')();
const { printTable } = require('console-table-printer');


const view = require('./view.js');
const update = require('./update.js');


function app(amount, tip) {
    
    console.clear();

    //Table
    const t = [{ "Bill Amount": `$ ${amount}`, "Tip (%)": `$ ${tip}`, "Tip": `$ ${amount}`, "Total": `$ ${amount}`}];
    printTable(t);

    

    
}
app(0,0);