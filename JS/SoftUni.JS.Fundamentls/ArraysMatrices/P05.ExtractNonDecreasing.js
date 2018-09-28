/*jshint esversion:6*/
function solve(arr) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    const myArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element >= maxValue) {
            myArr.push(element);
            maxValue = element;
        }

    }
    console.log(myArr.join('\n'));
}


solve([1, 3, 7, 8, 4, 2, 10, 12, 4, 3, 24]);