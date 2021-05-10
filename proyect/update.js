function update(msg, counter) {

    if (msg === '+') return ++counter;
    else if (msg === '-') return --counter;
    else if (msg === 'q') return false;  
    else return counter;
    
}

module.exports = update;