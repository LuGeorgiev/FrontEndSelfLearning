function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function formatter(value) {
    return formatCurrency(1, 2, 3, value);
}

formatter(5);

console.log("absdef".substr(-2, 2)); //LAst two