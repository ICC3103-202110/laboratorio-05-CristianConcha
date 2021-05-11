

function getTip(amount, tipPorcentage) {
    return (amount * tipPorcentage / 100);
}

function getTotal(amount, newtip) {
    return amount + newtip;
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