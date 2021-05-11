const { printTable } = require('console-table-printer')
const {questions} = require('./view')


async function app(state, update, view) {
    
    while (true) {
        const { model, currentView } = state
        const { title, table } = currentView
    
        console.clear()
        console.log(title)
        printTable(table)

        const { billAmount , percentage} = await questions(model)
        const updatedModel = update(billAmount, percentage, model)
    
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }

}

module.exports = {
    app
}