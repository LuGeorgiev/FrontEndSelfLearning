/*jshint esversion:6*/

function solve(arr) {

    let [x1, y1, x2, y2] = arr;

    validDistance([x1, y1, 0, 0]);
    validDistance([x2, y2, 0, 0]);
    validDistance([x1, y1, x2, y2]);

    function validDistance(input) {
        let [x1, y1, x2, y2] = input;

        let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }

    }
}

solve([2, 1, 1, 1]);