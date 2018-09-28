/*jshint esversion:6*/
function solve(arr) {
    const sum = arr[0].reduce((a, b) => a + b);

    for (let row = 0; row < arr.length; row++) {
        const nextSum = arr[row].reduce((a, b) => a + b);
        if (nextSum !== sum) {
            return false;
        }
        let verticalSum = 0;

        for (let col = 0; col < arr[row].length; col++) {
            verticalSum += arr[col][row];
        }

        if (verticalSum !== sum) {
            return false;
        }
    }
    return true;
}

const result = solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 0, 1]
]);
console.log(result);