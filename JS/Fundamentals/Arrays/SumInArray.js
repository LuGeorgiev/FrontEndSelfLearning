'use strict'

const arr = [4, 3, 1, 4, 2, 5, 8, 3],
    sum = 11;
let startIndex = 0,
    currentSum = 0,
    endIndex = 0;

for (let i = 0; i < arr.length; i += 1) {
    currentSum = 0;
    for (let j = i; j < arr.length; j += 1) {
        currentSum += arr[j];
        if (currentSum === sum) {
            console.log("start index=" + i + '; end idex=' + j)
            break;
        }
    }
}