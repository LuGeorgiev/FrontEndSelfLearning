/*jshint esversion:6*/
function solve(arr) {
    const matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(x => Number(x)));
    }

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i === j) {
                primaryDiagonal += matrix[i][j];
            }
            if (j === matrix[i].length - 1 - i) {
                secondaryDiagonal += matrix[i][j];
            }
        }
    }

    if (primaryDiagonal === secondaryDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && j !== matrix[i].length - 1 - i) {
                    matrix[i][j] = primaryDiagonal;
                }
            }
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);