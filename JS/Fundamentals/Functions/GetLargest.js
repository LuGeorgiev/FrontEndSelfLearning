const input = '8 3 6 24 78.9 ui'

function getMAx() {
    const args = arguments[0].split(' ').map(x => parseInt(x));
    let max = Number.MIN_SAFE_INTEGER;
    for (let iterator of args) {
        if (max < iterator) {
            max = iterator;
        }
    }
    return max;
}
console.log(getMAx(input));