

function getTip(amount, tipPorcentage) {
    return (amount * tipPorcentage / 100);
}

function getTotal(amount, newTip) {
    return amount + newTip;
}

function update(billAmount, percentage, model) {
    
    const newTip = getTip(Number(billAmount),Number(percentage))
    const newTotal = getTotal(Number(billAmount), Number(newTip))

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