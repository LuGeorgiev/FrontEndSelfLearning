'use strict';

const n = 26;
let arr = new Array(),
    resultArr = new Array();

for (let i = 0; i < n - 1; i++) {
    arr.push(i + 2);

}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        resultArr.push(arr[i]);
        let step = arr[i];
        for (let k = i; k < arr.length; k += step) {
            arr[k] = 0;
        }
    }
}

console.log(resultArr.pop());