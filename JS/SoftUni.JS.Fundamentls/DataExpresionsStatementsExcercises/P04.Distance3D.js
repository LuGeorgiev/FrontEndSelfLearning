/*jshint esversion:6*/

function solve(input) {
    const x1 = input[0];
    const y1 = input[1];
    const z1 = input[2];
    const x2 = input[3];
    const y2 = input[4];
    const z2 = input[5];

    const distance =
        Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
    console.log(distance);
}

solve([1, 1, 0, 5, 4, 0]);
solve([3.5, 0, 1, 0, 2, -1]);