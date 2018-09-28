/*jshint esversion:6*/
function solve(rows, colls) {
    const maxElement = rows * colls;
    let direction = 'right';
    let currentElement = 1;
    let arr = initializeArray(rows, colls);
    let row = 0;
    let col = 0;

    while (currentElement <= maxElement) {
        arr[row][col] = currentElement;
        currentElement++;

        if (direction === 'right') {
            col++;

            if (col >= colls || arr[row][col] !== 0) {
                col--;
                row++;
                direction = 'down';
            }
        } else if (direction === 'down') {
            row++;

            if (row >= rows || arr[row][col] !== 0) {
                row--;
                col--;
                direction = 'left';
            }
        } else if (direction === 'left') {
            col--;

            if (col < 0 || arr[row][col] !== 0) {
                col++;
                row--;
                direction = 'up';
            }
        } else if (direction === 'up') {
            row--;

            if (row < 0 || arr[row][col] !== 0) {
                row++;
                col++;
                direction = 'right';
            }
        }
    }

    printArr(arr);

    function initializeArray(rowCount, collCount) {
        let array = [];
        for (let i = 0; i < rowCount; i++) {
            array.push([]);
            for (let j = 0; j < collCount; j++) {
                array[i][j] = 0;
            }
        }

        return array;
    }

    function printArr(array) {
        for (let i = 0; i < rows; i++) {
            let result = '';
            for (let j = 0; j < colls; j++) {
                result += array[i][j] + ' ';
            }
            console.log(result);
        }
    }
}

solve(5, 5);