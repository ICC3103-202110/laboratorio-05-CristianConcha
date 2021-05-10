

const view = require('./view.js');
const update = require('./update.js');


function app(counter) {
    
    while (true) {
        
        const currentView = view(counter);
        console.clear();
        console.log(currentView);
        
        const prompt = require('prompt-sync')();
        const msg = prompt('What would you do? ');
        counter = update(msg, counter);

        if (counter === false) break;

    }
}
app(0);