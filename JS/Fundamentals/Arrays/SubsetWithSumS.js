'use strict';
const arr = [2, 1, 2, 4, 3, 5, 2, 6],
    sum = 14,
    combinations = Math.pow(2, arr.length);

//Generate combinations:
//i will present all teh possible combinations of numbers
for (let i = 1; i < combinations; i += 1) {
    let subset = new Array();


    for (let j = 0; j < arr.length; j += 1) { // form subset from bin expression on combination number
        if ((i >> j) & 1 === 1) {
            subset.push(arr[j]);
        }
    }

    if (subset.reduce(function(a, b) { return a + b; }) === sum) {

        console.log('Subset with sum: ' + sum + ' is: ' + subset);
        break; // if this is deleted all the subset that have the desired sum will be shown;
    }
}