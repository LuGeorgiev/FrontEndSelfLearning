const input = '8 3 6 24 78'

function stringToIntArray() {
    const args = arguments[0].split(' ').map(x => parseInt(x));
    return args;
}

function sortDescending() {
    let arrDescending = stringToIntArray(arguments[0]);
    arrDescending.sort(function(a, b) { return b - a; });
    return arrDescending;
}

function sortAscending() {
    let arrAscending = stringToIntArray(arguments[0]);
    arrAscending.sort(function(a, b) { return a - b; });
    return arrAscending;
}

console.log(sortDescending(input).join(' '));