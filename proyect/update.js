

function getTip(amount, tipPorcentage) {
    return (amount * tipPorcentage / 100);
}

function getTotal(amount, tip) {
    return amount + tip;
}

function update(billAmount, percentage, model) {
    
    const newTip = getTip(billAmount, percentage)
    const newTotal = getTotal(billAmount, newTip)

    return {
        ...model,
        billAmount: billAmount,
        percentage: percentage,
        tip: newTip,
        total: newTotal
    }
}

module.exports = {
    update
}