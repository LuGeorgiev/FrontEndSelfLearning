/*jshint esversion:6*/

function solve(args) {
    const number = args[0];
    let precision = args[1];
    if (precision > 15) {
        precision = 15;
    }

    console.log(Number(number.toFixed(precision)));
}

solve([3.1415926535897932384626433832795, 2]);
solve([10.5, 3]);